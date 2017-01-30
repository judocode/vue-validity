import directive from './directive'
import validationMixin from './mixin'
import errorMessages from './validators/errorMessages'
import validators from './validators'

// utilities
const constant = c => () => c
const buildFromKeys = (keys, fn, keyFn) => keys.reduce((build, key) => {
  build[keyFn ? keyFn(key) : key] = fn(key)
  return build
}, {})

function isObject (val) {
  return val !== null && typeof val === 'object'
}

function isNested (ruleset) {
  return isObject(ruleset) &&
         (typeof ruleset.$message === 'undefined' || typeof ruleset.$value === 'undefined')
}

let _cachedVue = null
function getVue (rootVm) {
  if (_cachedVue) return _cachedVue
  let Vue = rootVm.constructor
  while (Vue.super) Vue = Vue.super
  _cachedVue = Vue
  return Vue
}

function setDirtyRecursive (newState) {
  this.dirty = newState
  const method = newState ? '$validate' : '$reset'
  const keys = this.dynamicKeys

  for (let i = 0; i < keys.length; i++) {
    const ruleOrNested = keys[i]
    const val = this[ruleOrNested]
    if (isNested(val)) {
      val[method]()
    }
  }
}

function setErrorsRecursive (errors) {
  this.setErrors = []

  for (let j = 0; j < errors.length; j++) {
    const error = errors[j]

    if (this.name === error.field) {
      this.dirty = true
      this.setErrors.push(error)
    }
  }

  const keys = this.dynamicKeys
  for (let i = 0; i < keys.length; i++) {
    const ruleOrNested = keys[i]
    const val = this[ruleOrNested]

    if (isNested(val)) {
      val.$setErrors(errors)
    }
  }
}

// vm static definition
const defaultMethods = {
  $validate () {
    this.setErrors = []
    setDirtyRecursive.call(this, true)
  },
  $reset () {
    this.setErrors = []
    setDirtyRecursive.call(this, false)
  },
  $setErrors (errors) {
    setErrorsRecursive.call(this, errors)
  }
}

const defaultComputed = {
  $invalid () {
    if (this.setErrors.length) {
      return true
    }

    return this.dynamicKeys.some(ruleOrNested => {
      const val = getValidationValue(this, ruleOrNested)
      return isNested(val) ? val.$invalid : !val.$value
    })
  },
  $dirty () {
    if (this.dirty) {
      return true
    }

    const keys = this.dynamicKeys
    // iteration to trigger as little getters as possible
    let foundNested = false
    for (let i = 0; i < keys.length; i++) {
      const ruleOrNested = keys[i]
      const val = this[ruleOrNested]
      const nested = isNested(val)
      foundNested = foundNested || nested
      if (nested && val.$dirty) {
        return true
      }
    }
    return foundNested
  },
  $error () {
    return !!(this.$dirty && this.$invalid)
  },
  $errors () {
    if (!this.$error) {
      return []
    }

    const field = this.$data.name

    const errors = this.dynamicKeys.map(ruleOrNested => {
      const val = this[ruleOrNested]

      return isNested(val) ? val.$errors : {
        field: field,
        message: val.$message
      }
    })

    return flatten(errors)
  }
}

const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

const defaultMethodKeys = Object.keys(defaultMethods)
const defaultComputedKeys = Object.keys(defaultComputed)
const dynamicName = 'v$$'
const mapDynamicRuleName = k => dynamicName + k

function isSingleRule (ruleset) {
  return isObject(ruleset) &&
         typeof ruleset.message === 'function' &&
         typeof ruleset.validate === 'function'
}

/*
 * Creates a view model from a validations object.
 *
 * This starts at the root "validations" object that
 * is in a component, and traverses from there.
 *
 * @param validations Object|Array
 */
export function makeValidationVm (validations, parentVm, rootVm = parentVm, parentProp = null) {
  const validationRuleNames = Object.keys(validations).filter(key => !!validations[key])
  const dynamicKeys = validationRuleNames.map(mapDynamicRuleName)

  // Create computed rules for the current object, where
  // validationRuleNames are the properties of the current object,
  // which may or may not be validation rule names due to the nested
  // nature of the objects.
  const computedRules = buildFromKeys(validationRuleNames, (ruleName) => {
    const rule = validations[ruleName]

    return getValidator(rootVm, rule, ruleName, parentVm, parentProp)
  }, mapDynamicRuleName)

  const Vue = getVue(rootVm)

  const validationVm = new Vue({
    data: {
      dirty: false,
      dynamicKeys,
      name: parentProp,
      setErrors: []
    },
    methods: defaultMethods,
    computed: {
      ...computedRules,
      ...defaultComputed
    }
  })

  return proxyVm(validationVm, validationRuleNames)
}

/*
 * Returns a validator for the current "rule".
 *
 * A rule is in fact a rule if `isSingleRule` evaluates to true,
 * otherwise we are nested somewhere else in the validations object,
 * in which case we recursively traverse the object until the validators
 * are discovered.
 *
 * @param rootVm Object
 * @param rule Object|Array
 * @param ruleName String
 */
function getValidator (rootVm, rule, ruleName, vm, vmProp) {
  if (isSingleRule(rule)) {
    return getValidationRule(rootVm, rule, ruleName, vm, vmProp)
  } else {
    return getParentValidationRule(rootVm, rule, ruleName, vm, vmProp)
  }
}

function getValidationValue (vm, dynamicKey) {
  return vm[dynamicKey]
}

function getValidationRule (rootVm, rule, ruleName, parentVm, prop) {
  return function () {
    const validatorOutput = rule.validate.call(rootVm, parentVm[prop], parentVm)

    // support cross referencing validators, especially validation groups
    if (isObject(validatorOutput) && validatorOutput.__isValidity) {
      return validatorOutput
    }

    const validatorMessage = rule.message.call(rootVm, prop, parentVm)
    // const validatorMessage = rule.message.call(rootVm, parentVm[prop], parentVm)

    return {
      $value: !!validatorOutput,
      $message: validatorMessage
    }
  }
}

/*
 * A parent validation node is the root node,
 * or any nested object that holds validation
 * rules in its children (and beyond).
 */
function getParentValidationRule (rootVm, rules, ruleName, parentVm, prop) {
  // If it is an array of strings, then load the
  // associated validators.
  if (Array.isArray(rules)) {
    const newRules = {}
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i]
      newRules[rule] = validators[rule]
    }

    rules = newRules
  }

  const childVm = typeof prop === 'string' ? parentVm[prop] : parentVm
  const vm = makeValidationVm(rules, childVm, rootVm, ruleName)
  return constant(vm)
}

function proxyVm (vm, originalKeys) {
  const redirectDef = {
    ...buildFromKeys(originalKeys, key => {
      let dynamicRuleName = mapDynamicRuleName(key)
      return {
        enumerable: true,
        get () {
          return getValidationValue(vm, dynamicRuleName)
        }
      }
    }),
    ...buildFromKeys(defaultComputedKeys, key => ({
      enumerable: true,
      get () {
        return vm[key]
      }
    })),
    ...buildFromKeys(defaultMethodKeys, key => ({
      value: vm[key].bind(vm)
    })),
    __isValidity: {
      configurable: false,
      enumerable: false,
      value: true
    }
  }

  return Object.defineProperties({}, redirectDef)
}

export const validateModel = (model, validations) => makeValidationVm(validations, model)

let VueValidity = function (Vue, config) {
  if (VueValidity.isInstalled) {
    return
  }

  if (!config) {
    config = {}
  }

  errorMessages.init(config.errorMessages)

  Vue.directive(config.directiveName || 'validity', directive(config.inputClasses))
  Vue.mixin(validationMixin)

  VueValidity.isInstalled = true
}

if (typeof window !== 'undefined') {
  window.VueValidity = VueValidity
}

VueValidity.extend = function (name, validator) {
  validators.add(name, validator)
}

Object.keys(validators).forEach(name => {
  VueValidity.extend(name, validators[name])
})

export default VueValidity
