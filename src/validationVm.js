import { buildFromKeys,
         isSingleRule,
         isObject,
         constant,
         isNested,
         flatten } from './utils/index'
import validators from './validators/index'

function getValidationValue (vm, dynamicKey) {
  return vm[dynamicKey]
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
  $validate (callback) {
    this.setErrors = []
    setDirtyRecursive.call(this, true)
    if (typeof callback === 'function') {
      callback()
    }
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
  $valid () {
    if (this.setErrors.length) {
      return false
    }

    return !this.dynamicKeys.some(ruleOrNested => {
      const val = getValidationValue(this, ruleOrNested)
      return isNested(val) ? !val.$valid : !val.$value
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
    return !!(this.$dirty && !this.$valid)
  },
  $errors () {
    if (!this.$error) {
      return []
    }

    if (this.setErrors.length) {
      return this.setErrors
    }

    const field = this.$data.name

    const errors = this.dynamicKeys.map(ruleOrNested => {
      const val = this[ruleOrNested]

      if (isNested(val)) {
        return val.$errors
      }

      if (val.$value) {
        return null
      }

      return {
        field: field,
        message: val.$message
      }
    }).filter(r => r !== null)

    return flatten(errors)
  }
}

const defaultMethodKeys = Object.keys(defaultMethods)
const defaultComputedKeys = Object.keys(defaultComputed)
const dynamicName = 'v$$'
const mapDynamicRuleName = k => dynamicName + k

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

function getValidationRule (rootVm, rule, ruleName, parentVm, prop) {
  return function () {
    let flattenOptions = {}
    if (rule.options) {
      flattenOptions = rule.options.reduce((result, item) => {
        result[item.name] = item.value
        return result
      }, {})
    }

    const validatorOutput = rule.validate.call(rootVm, parentVm[prop], flattenOptions, parentVm)

    // support cross referencing validators, especially validation groups
    if (isObject(validatorOutput) && validatorOutput.__isValidity) {
      return validatorOutput
    }

    const validatorMessage = rule.message.call(rootVm, prop, flattenOptions, parentVm)

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
      let rule = rules[i]
      let options = []
      const optionsIndex = rule.indexOf(':')
      const hasOptions = optionsIndex !== -1

      if (hasOptions) {
        options = rule.substr(optionsIndex + 1).split(',')
        rule = rule.substr(0, optionsIndex)
      }

      const validatorRule = validators[rule]

      if (!validatorRule) {
        console.error('Validator for rule ' + rule + 'not found.')
        continue
      }

      for (let j = 0; j < options.length; j++) {
        const option = options[j]
        const validatorOption = validatorRule.options[j]
        validatorOption.value = option
      }

      newRules[rule] = validatorRule
    }

    rules = newRules
  }

  const childVm = typeof prop === 'string' ? parentVm[prop] : parentVm
  const vm = makeValidationVm(rules, childVm, rootVm, ruleName)
  return constant(vm)
}

export const validateModel = (model, validations) => makeValidationVm(validations, model)
