(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['vue-validity'] = global['vue-validity'] || {})));
}(this, (function (exports) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Given a string, return the object corresponding
 * to it with the provided delimiter.
 *
 * Eg. obj = { some: { prop: { hello: 'world' } } };
 *     str = 'some.prop.hello`
 *
 * Will return 'world'
 */
function getObjectByString(obj, str) {
  var delimiter = '.';
  // Convert indexes to properties.
  str = str.replace(/\[(\w+)\]/g, delimiter + '$1');
  // Strip leading dot.
  str = '.' + str;

  var regex = new RegExp('^\\' + delimiter);
  str = str.replace(regex, '');

  var a = str.split(delimiter);
  for (var i = 0; i < a.length; ++i) {
    var k = a[i];
    if (k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }

  return obj;
}

/**
 * Check if element has the css class on it.
 */
function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

/**
 * Adds the provided css className to the element.
 */
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += '  ' + className;
  }
}

/**
 * Remove the provided css className from the element.
 */
function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

var constant = function constant(c) {
  return function () {
    return c;
  };
};
var buildFromKeys = function buildFromKeys(keys, fn, keyFn) {
  return keys.reduce(function (build, key) {
    build[keyFn ? keyFn(key) : key] = fn(key);
    return build;
  }, {});
};

function isSingleRule(ruleset) {
  return isObject(ruleset) && (typeof ruleset.message === 'function' || typeof ruleset.validate === 'function');
}

function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

function isNested(ruleset) {
  return isObject(ruleset) && (typeof ruleset.$message === 'undefined' || typeof ruleset.$value === 'undefined');
}

var flatten = function flatten(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
};

var defaultClassNames = {
  touched: 'touched', // the control has been blurred
  untouched: 'untouched', // the control hasn't been blurred
  valid: 'valid', // model is valid
  invalid: 'invalid', // model is invalid
  pristine: 'pristine', // control has not been interacted with
  dirty: 'dirty' // control has been interacted with
};

var validationDirective = (function (inputClasses) {
  return {
    bind: function bind(el, binding, vnode) {
      setPristine(el, inputClasses);

      el.onfocus = function () {
        setDirty(el, inputClasses);
      };

      addClasses(el, binding, vnode, inputClasses);

      el.onblur = function () {
        var model = getValidationModel(binding, vnode);

        if (!model) {
          return;
        }

        model.$validate();
      };
    },
    inserted: function inserted(el, binding, vnode) {
      addClasses(el, binding, vnode, inputClasses);
    },
    update: function update(el, binding, vnode) {
      addClasses(el, binding, vnode, inputClasses);
    }
  };
});

function setDirty(el, classNames) {
  classNames = Object.assign({}, defaultClassNames, classNames);

  addClass(el, classNames.dirty);
  removeClass(el, classNames.pristine);
}

function setPristine(el, classNames) {
  classNames = Object.assign({}, defaultClassNames, classNames);

  addClass(el, classNames.pristine);
  removeClass(el, classNames.dirty);
}

function getValidationModel(binding, vnode) {
  var context = vnode.context.$v || vnode.context.$vnode.context.$v;

  if (!context) {
    return null;
  }

  if (vnode.context.$vChild) {
    return context;
  }

  var modelName = binding.value;

  if (!modelName) {
    var vmodels = vnode.data.directives.filter(function (d) {
      return d.name === 'model';
    });

    if (!vmodels.length) {
      var data = vnode.context.$options._parentVnode.data || [];

      var directives = data.directives.filter(function (d) {
        return d.name === 'model';
      });

      if (!data.directives.length) {
        modelName = '';
      }

      modelName = directives[0].expression;
    } else {
      modelName = vmodels[0].expression;
    }
  }

  if (!modelName) {
    return context;
  }

  return getObjectByString(context, modelName);
}

function addClasses(el, binding, vnode) {
  var classNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  classNames = Object.assign(defaultClassNames, classNames);

  var model = getValidationModel(binding, vnode);

  if (!model) {
    return;
  }

  var isDirty = model.$dirty;
  var isValid = model.$valid;

  if (isDirty) {
    addClass(el, classNames.touched);
    removeClass(el, classNames.untouched);
  } else {
    addClass(el, classNames.untouched);
    removeClass(el, classNames.touched);
  }

  if (isValid) {
    addClass(el, classNames.valid);
    removeClass(el, classNames.invalid);
  } else {
    addClass(el, classNames.invalid);
    removeClass(el, classNames.valid);
  }
}

var Errors = {
  required: '{field} is required.',
  minlength: '{field} should be at least {minlength} chars.',

  init: function init(errorMessages) {
    if (!errorMessages) {
      return;
    }

    for (var error in errorMessages) {
      if (errorMessages.hasOwnProperty(error)) {
        this[error] = errorMessages[error];
      }
    }
  },
  getErrorMessage: function getErrorMessage(type, field, options) {
    var error = this[type];

    if (!error) {
      return null;
    }

    error = error.replace(new RegExp(/{field}/, 'g'), field);

    if (options) {
      for (var option in options) {
        if (options.hasOwnProperty(option)) {
          error = error.replace(new RegExp('{' + option + '}', 'g'), options[option]);
        }
      }
    }

    return error;
  }
};

var required = {
  validate: function validate(value, options, parentVm) {
    if (Array.isArray(value)) return !!value.length;

    return value === undefined || value === null ? false : !!String(value).length;
  },
  message: function message(field, val) {
    return Errors.getErrorMessage('required', field, val);
  }
};

var minlength = {
  options: [{
    name: 'minlength',
    value: 0
  }],

  validate: function validate(value, options, parentVm) {
    var length = parseInt(options.minlength, 10);

    if (Array.isArray(value)) {
      return value.length === 0 || value.length >= length;
    }

    return value === undefined || value === null ? true : value === '' || String(value).length >= length;
  },
  message: function message(field, options, parentVm) {
    return Errors.getErrorMessage('minlength', field, options);
  }
};

var validators = {
  required: required,
  minlength: minlength,

  add: function add(name, validator) {
    if (this[name]) {
      this[name] = Object.assign(this[name], validator);
      return;
    }

    this[name] = validator;
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function getValidationValue(vm, dynamicKey) {
  return vm[dynamicKey];
}

var _cachedVue = null;
function getVue(rootVm) {
  if (_cachedVue) return _cachedVue;
  var Vue = rootVm.constructor;
  while (Vue.super) {
    Vue = Vue.super;
  }_cachedVue = Vue;
  return Vue;
}

function setDirtyRecursive(newState) {
  this.dirty = newState;
  var method = newState ? '$validate' : '$reset';
  var keys = this.dynamicKeys;

  for (var i = 0; i < keys.length; i++) {
    var ruleOrNested = keys[i];
    var val = this[ruleOrNested];
    if (isNested(val)) {
      val[method]();
    }
  }
}

function setErrorsRecursive(errors) {
  this.setErrors = [];

  for (var j = 0; j < errors.length; j++) {
    var error = errors[j];

    if (this.name === error.field) {
      this.dirty = true;
      this.setErrors.push(error);
    }
  }

  var keys = this.dynamicKeys;
  for (var i = 0; i < keys.length; i++) {
    var ruleOrNested = keys[i];
    var val = this[ruleOrNested];

    if (isNested(val)) {
      val.$setErrors(errors);
    }
  }
}

// vm static definition
var defaultMethods = {
  $validate: function $validate(callback) {
    this.setErrors = [];
    setDirtyRecursive.call(this, true);
    if (typeof callback === 'function') {
      callback();
    }
  },
  $reset: function $reset() {
    this.setErrors = [];
    setDirtyRecursive.call(this, false);
  },
  $setErrors: function $setErrors(errors) {
    setErrorsRecursive.call(this, errors);
  }
};

var defaultComputed = {
  $valid: function $valid() {
    var _this = this;

    if (this.setErrors.length) {
      return false;
    }

    return !this.dynamicKeys.some(function (ruleOrNested) {
      var val = getValidationValue(_this, ruleOrNested);
      return isNested(val) ? !val.$valid : !val.$value;
    });
  },
  $dirty: function $dirty() {
    if (this.dirty) {
      return true;
    }

    var keys = this.dynamicKeys;
    // iteration to trigger as little getters as possible
    var foundNested = false;
    for (var i = 0; i < keys.length; i++) {
      var ruleOrNested = keys[i];
      var val = this[ruleOrNested];
      var nested = isNested(val);
      foundNested = foundNested || nested;
      if (nested && val.$dirty) {
        return true;
      }
    }
    return foundNested;
  },
  $error: function $error() {
    return !!(this.$dirty && !this.$valid);
  },
  $errors: function $errors() {
    var _this2 = this;

    if (!this.$error) {
      return [];
    }

    if (this.setErrors.length) {
      return this.setErrors;
    }

    var field = this.$data.name;

    var errors = this.dynamicKeys.map(function (ruleOrNested) {
      var val = _this2[ruleOrNested];

      if (isNested(val)) {
        return val.$errors;
      }

      if (val.$value) {
        return null;
      }

      return {
        field: field,
        message: val.$message
      };
    }).filter(function (r) {
      return r !== null;
    });

    return flatten(errors);
  }
};

var defaultMethodKeys = Object.keys(defaultMethods);
var defaultComputedKeys = Object.keys(defaultComputed);
var dynamicName = 'v$$';
var mapDynamicRuleName = function mapDynamicRuleName(k) {
  return dynamicName + k;
};

/*
 * Creates a view model from a validations object.
 *
 * This starts at the root "validations" object that
 * is in a component, and traverses from there.
 *
 * @param validations Object|Array
 */
function makeValidationVm(validations, parentVm) {
  var rootVm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : parentVm;
  var parentProp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var validationRuleNames = Object.keys(validations).filter(function (key) {
    return !!validations[key];
  });
  var dynamicKeys = validationRuleNames.map(mapDynamicRuleName);

  // Create computed rules for the current object, where
  // validationRuleNames are the properties of the current object,
  // which may or may not be validation rule names due to the nested
  // nature of the objects.
  var computedRules = buildFromKeys(validationRuleNames, function (ruleName) {
    var rule = validations[ruleName];

    return getValidator(rootVm, rule, ruleName, parentVm, parentProp);
  }, mapDynamicRuleName);

  var Vue = getVue(rootVm);

  var validationVm = new Vue({
    data: {
      dirty: false,
      dynamicKeys: dynamicKeys,
      name: parentProp,
      setErrors: []
    },
    methods: defaultMethods,
    computed: _extends({}, computedRules, defaultComputed)
  });

  return proxyVm(validationVm, validationRuleNames);
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
function getValidator(rootVm, rule, ruleName, vm, vmProp) {
  if (isSingleRule(rule)) {
    return getValidationRule(rootVm, rule, ruleName, vm, vmProp);
  } else {
    return getParentValidationRule(rootVm, rule, ruleName, vm, vmProp);
  }
}

function proxyVm(vm, originalKeys) {
  var redirectDef = _extends({}, buildFromKeys(originalKeys, function (key) {
    var dynamicRuleName = mapDynamicRuleName(key);
    return {
      enumerable: true,
      get: function get() {
        return getValidationValue(vm, dynamicRuleName);
      }
    };
  }), buildFromKeys(defaultComputedKeys, function (key) {
    return {
      enumerable: true,
      get: function get() {
        return vm[key];
      }
    };
  }), buildFromKeys(defaultMethodKeys, function (key) {
    return {
      value: vm[key].bind(vm)
    };
  }), {
    __isValidity: {
      configurable: false,
      enumerable: false,
      value: true
    }
  });

  return Object.defineProperties({}, redirectDef);
}

function getValidationRule(rootVm, rule, ruleName, parentVm, prop) {
  return function () {
    var flattenOptions = {};
    if (rule.options) {
      flattenOptions = rule.options.reduce(function (result, item) {
        result[item.name] = item.value;
        return result;
      }, {});
    }

    var validatorOutput = rule.validate.call(rootVm, parentVm[prop], flattenOptions, parentVm);

    // support cross referencing validators, especially validation groups
    if (isObject(validatorOutput) && validatorOutput.__isValidity) {
      return validatorOutput;
    }

    var validatorMessage = rule.message.call(rootVm, prop, flattenOptions, parentVm);

    return {
      $value: !!validatorOutput,
      $message: validatorMessage
    };
  };
}

/*
 * A parent validation node is the root node,
 * or any nested object that holds validation
 * rules in its children (and beyond).
 */
function getParentValidationRule(rootVm, rules, ruleName, parentVm, prop) {
  // If it is an array of strings, then load the
  // associated validators.
  if (Array.isArray(rules)) {
    var newRules = {};
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      var options = [];
      var optionsIndex = rule.indexOf(':');
      var hasOptions = optionsIndex !== -1;

      if (hasOptions) {
        options = rule.substr(optionsIndex + 1).split(',');
        rule = rule.substr(0, optionsIndex);
      }

      var validatorRule = validators[rule];

      if (!validatorRule) {
        console.error('Validator for rule ' + rule + 'not found.');
        continue;
      }

      for (var j = 0; j < options.length; j++) {
        var option = options[j];
        var validatorOption = validatorRule.options[j];
        validatorOption.value = option;
      }

      newRules[rule] = validatorRule;
    }

    rules = newRules;
  }

  var childVm = typeof prop === 'string' ? parentVm[prop] : parentVm;
  var vm = makeValidationVm(rules, childVm, rootVm, ruleName);
  return constant(vm);
}

var validateModel = function validateModel(model, validations) {
  return makeValidationVm(validations, model);
};

var validationMixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;

    var options = this.$options;
    var hasValidations = !!options.validations;

    var validations = options.validations;

    if (typeof options.computed === 'undefined') {
      options.computed = {};
    }

    if (hasValidations) {
      options.computed.$v = function () {
        return validateModel(_this, validations);
      };
    } else if (options.parent && options.parent.$v) {
      // If the child has explicitly stated it is validatable,
      // then pass the validatation object from the parent.
      if (options.validatable) {
        this.$v = options.parent.$v;
        return;
      }

      // If the current component has a parent,
      // try and get the name of v-model.
      var parentData = options._parentVnode.data.directives || [];
      var directives = parentData.filter(function (d) {
        return d.name === 'model';
      });

      if (directives.length) {
        // Set $v to what the child component v-model refers to.
        var obj = getObjectByString(options.parent.$v, directives[0].expression);
        this.$v = obj;
        this.$vChild = true;
      }
    }
  }
};

var VueValidity = function VueValidity(Vue, config) {
  if (VueValidity.isInstalled) {
    return;
  }

  if (!config) {
    config = {};
  }

  Errors.init(config.errorMessages);

  Vue.directive(config.directiveName || 'validity', validationDirective(config.inputClasses));
  Vue.mixin(validationMixin);

  VueValidity.isInstalled = true;
};

if (typeof window !== 'undefined') {
  window.VueValidity = VueValidity;
}

VueValidity.extend = function (name, validator) {
  validators.add(name, validator);
};

Object.keys(validators).forEach(function (name) {
  VueValidity.extend(name, validators[name]);
});

var getErrorMessage = Errors.getErrorMessage;

exports.validationMixin = validationMixin;
exports.validationDirective = validationDirective;
exports.VueValidity = VueValidity;
exports.getErrorMessage = getErrorMessage;
exports['default'] = VueValidity;

Object.defineProperty(exports, '__esModule', { value: true });

})));
