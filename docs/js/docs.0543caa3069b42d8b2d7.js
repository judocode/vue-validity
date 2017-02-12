(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["docs"] = factory();
	else
		root["docs"] = factory();
})(this, function() {
return webpackJsonp_name_([1,2],{

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(116)

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  "data-v-4c68cce8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "navigation"
  }, [_c('h3', [_vm._v("Navigation")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', [_c('div', {
    attrs: {
      "id": "installation"
    }
  }, [_c('h2', [_vm._v("Installation")]), _vm._v(" "), _c('prism-code', [_vm._v("npm install --save vue-validity")]), _vm._v(" "), _c('prism-code', {
    attrs: {
      "id": "install"
    }
  }, [_vm._v("\nimport Vue from 'vue'\nimport Validity from 'vue-validity'\n\n// Optionally pass in configuration options.\nVue.use(Validity, {})\n      ")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "basic-usage"
    }
  }, [_c('h2', [_vm._v("Basic usage")]), _vm._v(" "), _c('p', [_vm._v("For each value you want to validate, you have to create a key inside validations options.")]), _vm._v(" "), _c('prism-code', [_vm._v("\nnew Vue({\n  data () {\n    return {\n      name: ''\n    }\n  },\n  validations: {\n    name: ['required', 'minlength:4']\n  }\n})\n      ")]), _vm._v(" "), _c('p', [_vm._v("This will result in the following validation object:")]), _vm._v(" "), _c('prism-code', [_vm._v("\n$v: {\n  \"name\": {\n    \"required\": {\n      \"$value\": false,\n      \"$message\": \"name is required.\"\n    },\n    \"minlength\": {\n      \"$value\": true,\n      \"$message\": \"name should be at least 4 chars.\"\n    },\n    \"$valid\": false,\n    \"$dirty\": false,\n    \"$error\": false,\n    \"$errors\": []\n  },\n  \"$valid\": false,\n  \"$dirty\": false,\n  \"$error\": false,\n  \"$errors\": []\n}\n      ")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "display-error-messages"
    }
  }, [_c('h2', [_vm._v("Display error messages")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('prism-code', {
    attrs: {
      "language": "html"
    }
  }, [_vm._v(_vm._s(_vm.errorHtml))]), _vm._v(" "), _c('p', [_vm._v("We can display errors in this manner on individual properties, or all validation errors that exist, for use in an error summary, for example.")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "custom-error-messages"
    }
  }, [_c('h2', [_vm._v("Custom error messages")]), _vm._v(" "), _c('p', [_vm._v("vue-validity comes with error messages already, however, they are able to be customized. This is helpful when you have translations.")]), _vm._v(" "), _c('p', [_vm._v("When installing vue-validity you can add these custom error messages in the the options object under errorMessages.")]), _vm._v(" "), _c('prism-code', [_vm._v("\nconst options = {\n  errorMessages: {\n    required: '{field} is required'\n  }\n}\n\nVue.use(Validity, options)\n      ")]), _vm._v(" "), _c('p', [_vm._v("{field} is just a placeholder for the field that this will be used on. If the field name is \"firstName\" then you error message will read: \"firstName is required\".")]), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "custom-validators"
    }
  }, [_c('h2', [_vm._v("Custom validators")]), _vm._v(" "), _c('p', [_vm._v("The installed validators are great, but you can also easily add your own!")]), _vm._v(" "), _c('prism-code', {
    attrs: {
      "language": "javascript"
    }
  }, [_vm._v("\nimport Validity from 'vue-validity'\n\nValidity.extend('range', {\n  // The order of options is important when you\n  // are referencing a validator via a string.\n  // Eg. name: ['range:2,3'] is going to depend\n  // on this options array matching that first\n  // and second value.\n  options: [\n    {\n      name: 'minlength',\n      value: 0\n    },\n    {\n      name: 'maxlenth',\n      value: 10\n    }\n  ],\n\n  // Method to return whether the current\n  // field is valid based on the given constraints.\n  validate (value, options) {\n    // You have access to the current value and any\n    // options from the options array by their name.\n    // Eg. minlength == 0 and maxlength == 10\n    return value.length >= options.minlength\n            && value.length <= options.maxlength\n  }\n})\n      ")]), _vm._v(" "), _c('p', [_vm._v("Validators can also be defined directly inline in the validations object.")]), _vm._v(" "), _c('prism-code', [_vm._v("\nvalidations: {\n  name: {\n    required: {\n      validate (value) {\n        return !!(value)\n      },\n\n      message (field) {\n        return `${field} is required!`\n      }\n    }\n  }\n}\n      ")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "validate-custom-components"
    }
  }, [_c('h2', [_vm._v("Validate custom components")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('prism-code', {
    attrs: {
      "language": "html"
    }
  }, [_vm._v(_vm._s(_vm.parentCustomComponent))]), _vm._v(" "), _c('prism-code', [_vm._v("\nnew Vue({\n  data() {\n    return {\n      form: {\n        username: '',\n        password: ''\n      }\n    }\n  },\n\n  validations: {\n    form: {\n      username: ['required'],\n      password: ['required']\n    }\n  }\n})\n      ")]), _vm._v(" "), _c('prism-code', {
    attrs: {
      "language": "html"
    }
  }, [_vm._v(_vm._s(_vm.childCustomComponent))]), _vm._v(" "), _c('prism-code', [_vm._v("\nnew Vue({\n  props: ['value'],\n  methods: {\n    onInput (value) {\n      this.$emit('input', value)\n    }\n  }\n})\n      ")]), _vm._v(" "), _vm._m(5)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "manually-add-errors"
    }
  }, [_c('h2', [_vm._v("Manually add errors")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('prism-code', [_vm._v("\nthis.$v.$setErrors([\n  {\n    field: 'name',\n    message: 'You cannot do that!'\n  }\n])\n      ")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "input-classes"
    }
  }, [_c('h2', [_vm._v("Input classes")]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('prism-code', {
    attrs: {
      "language": "html"
    }
  }, [_vm._v(_vm._s(_vm.inputClasses))]), _vm._v(" "), _c('p', [_vm._v("This automatically enables 'valid', 'invalid', 'pristine', 'dirty', 'touched', and 'untouched' classes depending on the state of your input.")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('prism-code', [_vm._v("\nconst options = {\n  inputClasses: {\n    valid: 'my-valid',\n    invalid: 'my-invalid'\n  }\n}\n\nVue.use(Validity, options)\n      ")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "playground"
    }
  }, [_c('h2', [_vm._v("Playground")]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submitForm($event)
      }
    }
  }, [_c('h3', [_vm._v("Example form")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.match.firstName),
      expression: "match.firstName"
    }, {
      name: "validity",
      rawName: "v-validity"
    }],
    attrs: {
      "type": "text",
      "placeholder": "First name"
    },
    domProps: {
      "value": _vm._s(_vm.match.firstName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.match.firstName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('error-messages', {
    attrs: {
      "model": _vm.$v.match.firstName
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.match.lastName),
      expression: "match.lastName"
    }, {
      name: "validity",
      rawName: "v-validity"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Last name"
    },
    domProps: {
      "value": _vm._s(_vm.match.lastName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.match.lastName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('error-messages', {
    attrs: {
      "model": _vm.$v.match.lastName
    }
  }), _vm._v(" "), _c('hello', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.match.message),
      expression: "match.message"
    }],
    domProps: {
      "value": (_vm.match.message)
    },
    on: {
      "input": function($event) {
        _vm.match.message = $event
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('h5', [_vm._v("Validation state:")]), _vm._v(" "), _c('pre', {
    staticClass: "text-left"
  }, [_vm._v("$v: " + _vm._s(_vm.$v)), _vm._v("\n      ")])], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "intro",
    attrs: {
      "id": "intro"
    }
  }, [_c('h1', [_vm._v("vue-validity")]), _vm._v(" "), _c('h4', [_vm._v("A simple, powerful and flexible Vue.js validation library.")]), _vm._v(" "), _c('h3', [_vm._v("Features")]), _vm._v(" "), _c('ul', {
    staticClass: "text-left"
  }, [_c('li', [_vm._v("Model-based validation")]), _vm._v(" "), _c('li', [_vm._v("Automatically adds classes based on input state")]), _vm._v(" "), _c('li', [_vm._v("Programmatically add errors (eg. server-side errors)")]), _vm._v(" "), _c('li', [_vm._v("Validate custom components")]), _vm._v(" "), _c('li', [_vm._v("Add your own translations")]), _vm._v(" "), _c('li', [_vm._v("Create your own custom validations")]), _vm._v(" "), _c('li', [_vm._v("Extend existing validations")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#intro"
    }
  }, [_vm._v("Introduction")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#installation"
    }
  }, [_vm._v("Installation")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#basic-usage"
    }
  }, [_vm._v("Basic usage")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#display-error-messages"
    }
  }, [_vm._v("Display error messages")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#custom-error-messages"
    }
  }, [_vm._v("Custom error messages")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#custom-validators"
    }
  }, [_vm._v("Custom validators")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#validate-custom-components"
    }
  }, [_vm._v("Validate custom components")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#manually-add-errors"
    }
  }, [_vm._v("Manually add errors")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#input-classes"
    }
  }, [_vm._v("Input classes")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#playground"
    }
  }, [_vm._v("Playground")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("A validation library is not all that useful without being able to provide us with error messages that relate to a given field. Luckily, "), _c('code', [_vm._v("vue-validity")]), _vm._v(" makes this very easy! As you can see in the validations object above, we have access to "), _c('code', [_vm._v("$errors")]), _vm._v(" on each property.")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Other validators can have their own options as well. For example, a range validator should have two values that we want to use to customize the message. See the "), _c('a', {
    attrs: {
      "href": "#custom-validators"
    }
  }, [_vm._v("Custom validators")]), _vm._v(" section to read more about this.")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Often you find yourself in situations where you want to abstract a certain input field into its own component, either to be shared, or because it has its own set of complex logic that would serve a better purpose in its own component. "), _c('code', [_vm._v("vue-validity")]), _vm._v(" makes this easy, so long as you are using the "), _c('a', {
    attrs: {
      "href": "https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events"
    }
  }, [_c('code', [_vm._v("v-model")]), _vm._v(" pattern")]), _vm._v(" for the custom component.")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Notice how, in the child component, we didn't have to declare a validations object nor did we have to access the nested property of "), _c('code', [_vm._v("$v.form.password")]), _vm._v(". In a child component that uses "), _c('code', [_vm._v("v-model")]), _vm._v(", "), _c('code', [_vm._v("$v")]), _vm._v(" is basically an alias to "), _c('code', [_vm._v("$v.form.password")]), _vm._v(", or whatever it is based on the context you are in.")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("There may be times where you would like to manually set your own errors. This is especially helpful when you have server-side errors that come back. Much like each nested property has "), _c('code', [_vm._v("$reset")]), _vm._v(" and "), _c('code', [_vm._v("$validate")]), _vm._v(", you also have access to "), _c('code', [_vm._v("$setErrors")]), _vm._v(", which accepts an array of errors:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("It is common to apply classes to your input fields based on your input's state (whether it is valid, if it has been touched, etc). In order to add this functionality, all you need to do is add the "), _c('code', [_vm._v("v-validity")]), _vm._v(" directive on the input.\n      ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_vm._v("\n          touched\n        ")]), _vm._v(" "), _c('dd', [_vm._v("\n          The control has been blurred.\n        ")]), _vm._v(" "), _c('dt', [_vm._v("\n          untouched\n        ")]), _vm._v(" "), _c('dd', [_vm._v("\n          The control has not been blurred.\n        ")]), _vm._v(" "), _c('dt', [_vm._v("\n          valid\n        ")]), _vm._v(" "), _c('dd', [_vm._v("\n          The input is valid.\n        ")]), _vm._v(" "), _c('dt', [_vm._v("\n          invalid\n        ")]), _vm._v(" "), _c('dd', [_vm._v("\n          The input is invalid.\n        ")]), _vm._v(" "), _c('dt', [_vm._v("\n          dirty\n        ")]), _vm._v(" "), _c('dd', [_vm._v("\n          The input has been interacted with.\n        ")]), _vm._v(" "), _c('dt', [_vm._v("\n          pristine\n        ")]), _vm._v(" "), _c('dd', [_vm._v("\n          The input has not been interacted with.\n        ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("You can customize the names of these classes via the "), _c('code', [_vm._v("inputClasses")]), _vm._v(" property of the options when you are initializing "), _c('code', [_vm._v("vue-validity")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Experiment with "), _c('code', [_vm._v("vue-validity")]), _vm._v(" here!")])
}]}

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.model.$errors), function(error) {
    return _c('div', {
      staticClass: "error"
    }, [_vm._v("\n    " + _vm._s(error.message) + "\n  ")])
  }))
},staticRenderFns: []}

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h4', [_vm._v("Child component in form"), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "validity",
      rawName: "v-validity"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Message"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.onInput($event.target.value)
      }
    }
  })]), _vm._v(" "), _c('error-messages', {
    attrs: {
      "model": _vm.$v
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    ref: "prism",
    staticClass: "prism"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_index__ = __webpack_require__(56);




const validityConfig = {
  directiveName: 'validity',
  inputClasses: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'valid',
    invalid: 'invalid'
  },
  errorMessages: {
    required: '{field} is required????'
  }
}

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__src_index__["a" /* default */], validityConfig)

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
})


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getObjectByString;
/* unused harmony export hasClass */
/* harmony export (immutable) */ __webpack_exports__["h"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["i"] = removeClass;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return buildFromKeys; });
/* harmony export (immutable) */ __webpack_exports__["e"] = isSingleRule;
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["b"] = isNested;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return flatten; });


function getObjectByString(obj, str) {
  var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';

  str = str.replace(/\[(\w+)\]/g, delimiter + '$1');

  str = '.' + str;

  var regex = new RegExp('^\\' + delimiter);
  str = str.replace(regex, '');

  var a = str.split('' + delimiter);
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }

  return obj;
}

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += ' ' + className;
  }
}

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
  return isObject(ruleset) && typeof ruleset.message === 'function' && typeof ruleset.validate === 'function';
}

function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(val)) === 'object';
}

function isNested(ruleset) {
  return isObject(ruleset) && (typeof ruleset.$message === 'undefined' || typeof ruleset.$value === 'undefined');
}

var flatten = function flatten(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
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

    if (options && options.length) {
      for (var i = 0; i < options.length; i++) {
        var option = options[i];
        error = error.replace(new RegExp('{' + option.name + '}', 'g'), option.value);
      }
    }

    return error;
  }
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__required__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minlength__ = __webpack_require__(62);



/* harmony default export */ __webpack_exports__["a"] = {
  required: __WEBPACK_IMPORTED_MODULE_0__required__["a" /* default */],
  minlength: __WEBPACK_IMPORTED_MODULE_1__minlength__["a" /* default */],

  add: function add(name, validator) {
    if (this[name]) {
      return;
    }

    this[name] = validator;
  }
};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(121),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_errorMessages__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators__ = __webpack_require__(36);






var VueValidity = function VueValidity(Vue, config) {
  if (VueValidity.isInstalled) {
    return;
  }

  if (!config) {
    config = {};
  }

  __WEBPACK_IMPORTED_MODULE_3__validators_errorMessages__["a" /* default */].init(config.errorMessages);

  Vue.directive(config.directiveName || 'validity', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__directive__["a" /* default */])(config.inputClasses));
  Vue.mixin(__WEBPACK_IMPORTED_MODULE_2__mixin__["a" /* default */]);

  VueValidity.isInstalled = true;
};

if (typeof window !== 'undefined') {
  window.VueValidity = VueValidity;
}

VueValidity.extend = function (name, validator) {
  __WEBPACK_IMPORTED_MODULE_4__validators__["a" /* default */].add(name, validator);
};

__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(__WEBPACK_IMPORTED_MODULE_4__validators__["a" /* default */]).forEach(function (name) {
  VueValidity.extend(name, __WEBPACK_IMPORTED_MODULE_4__validators__["a" /* default */][name]);
});

/* harmony default export */ __webpack_exports__["a"] = VueValidity;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(114)

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(22);



var defaultClassNames = {
  touched: 'touched',
  untouched: 'untouched',
  valid: 'valid',
  invalid: 'invalid',
  pristine: 'pristine',
  dirty: 'dirty' };

/* harmony default export */ __webpack_exports__["a"] = function (inputClasses) {
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
};

function setDirty(el, classNames) {
  classNames = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultClassNames, classNames);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* addClass */])(el, classNames.dirty);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* removeClass */])(el, classNames.pristine);
}

function setPristine(el, classNames) {
  classNames = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultClassNames, classNames);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* addClass */])(el, classNames.pristine);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* removeClass */])(el, classNames.dirty);
}

function getValidationModel(binding, vnode) {
  if (!vnode.context.$v) {
    return;
  }

  if (vnode.context.$vChild) {
    return vnode.context.$v;
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
    return vnode.context.$v;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getObjectByString */])(vnode.context.$v, modelName);
}

function addClasses(el, binding, vnode) {
  var classNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  classNames = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultClassNames, classNames);

  var model = getValidationModel(binding, vnode);

  if (!model) {
    return;
  }

  var isDirty = model.$dirty;
  var isValid = model.$valid;

  if (isDirty) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* addClass */])(el, classNames.touched);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* removeClass */])(el, classNames.untouched);
  } else {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* addClass */])(el, classNames.untouched);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* removeClass */])(el, classNames.touched);
  }

  if (isValid) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* addClass */])(el, classNames.valid);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* removeClass */])(el, classNames.invalid);
  } else {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* addClass */])(el, classNames.invalid);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* removeClass */])(el, classNames.valid);
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validationVm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(22);



/* harmony default export */ __webpack_exports__["a"] = {
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validationVm__["a" /* validateModel */])(_this, validations);
      };
    } else if (options.parent && options.parent.$v) {
      var parentData = options._parentVnode.data.directives || [];
      var directives = parentData.filter(function (d) {
        return d.name === 'model';
      });

      if (directives.length) {
        var obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getObjectByString */])(options.parent.$v, directives[0].expression);
        this.$v = obj;
        this.$vChild = true;
      }
    }
  }
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators__ = __webpack_require__(36);
/* unused harmony export makeValidationVm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateModel; });







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
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* isNested */])(val)) {
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

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* isNested */])(val)) {
      val.$setErrors(errors);
    }
  }
}

var defaultMethods = {
  $validate: function $validate() {
    var _this = this;

    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      _this.setErrors = [];
      setDirtyRecursive.call(_this, true);
      resolve();
    });
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
    var _this2 = this;

    if (this.setErrors.length) {
      return false;
    }

    return !this.dynamicKeys.some(function (ruleOrNested) {
      var val = getValidationValue(_this2, ruleOrNested);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* isNested */])(val) ? !val.$valid : !val.$value;
    });
  },
  $dirty: function $dirty() {
    if (this.dirty) {
      return true;
    }

    var keys = this.dynamicKeys;

    var foundNested = false;
    for (var i = 0; i < keys.length; i++) {
      var ruleOrNested = keys[i];
      var val = this[ruleOrNested];
      var nested = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* isNested */])(val);
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
    var _this3 = this;

    if (!this.$error) {
      return [];
    }

    if (this.setErrors.length) {
      return this.setErrors;
    }

    var field = this.$data.name;

    var errors = this.dynamicKeys.map(function (ruleOrNested) {
      var val = _this3[ruleOrNested];

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* isNested */])(val)) {
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

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* flatten */])(errors);
  }
};

var defaultMethodKeys = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(defaultMethods);
var defaultComputedKeys = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(defaultComputed);
var dynamicName = 'v$$';
var mapDynamicRuleName = function mapDynamicRuleName(k) {
  return dynamicName + k;
};

function makeValidationVm(validations, parentVm) {
  var rootVm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : parentVm;
  var parentProp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var validationRuleNames = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(validations).filter(function (key) {
    return !!validations[key];
  });
  var dynamicKeys = validationRuleNames.map(mapDynamicRuleName);

  var computedRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* buildFromKeys */])(validationRuleNames, function (ruleName) {
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
    computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, computedRules, defaultComputed)
  });

  return proxyVm(validationVm, validationRuleNames);
}

function getValidator(rootVm, rule, ruleName, vm, vmProp) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* isSingleRule */])(rule)) {
    return getValidationRule(rootVm, rule, ruleName, vm, vmProp);
  } else {
    return getParentValidationRule(rootVm, rule, ruleName, vm, vmProp);
  }
}

function proxyVm(vm, originalKeys) {
  var redirectDef = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* buildFromKeys */])(originalKeys, function (key) {
    var dynamicRuleName = mapDynamicRuleName(key);
    return {
      enumerable: true,
      get: function get() {
        return getValidationValue(vm, dynamicRuleName);
      }
    };
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* buildFromKeys */])(defaultComputedKeys, function (key) {
    return {
      enumerable: true,
      get: function get() {
        return vm[key];
      }
    };
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* buildFromKeys */])(defaultMethodKeys, function (key) {
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

  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties___default()({}, redirectDef);
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

    var validatorOutput = rule.validate.call(rootVm, parentVm[prop], flattenOptions);

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isObject */])(validatorOutput) && validatorOutput.__isValidity) {
      return validatorOutput;
    }

    var validatorMessage = rule.message.call(rootVm, prop, rule.options);

    return {
      $value: !!validatorOutput,
      $message: validatorMessage
    };
  };
}

function getParentValidationRule(rootVm, rules, ruleName, parentVm, prop) {
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

      var validatorRule = __WEBPACK_IMPORTED_MODULE_5__validators__["a" /* default */][rule];

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
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["g" /* constant */])(vm);
}

var validateModel = function validateModel(model, validations) {
  return makeValidationVm(validations, model);
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorMessages__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = {
  options: [{
    name: 'minlength',
    value: 0
  }],

  validate: function validate(value, options) {
    var length = parseInt(options.minlength, 10);

    if (Array.isArray(value)) {
      return value.length === 0 || value.length >= length;
    }

    return value === undefined || value === null ? true : value === '' || String(value).length >= length;
  },
  message: function message(field, options) {
    return __WEBPACK_IMPORTED_MODULE_0__errorMessages__["a" /* default */].getErrorMessage('minlength', field, options);
  }
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorMessages__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = {
  validate: function validate(value) {
    if (Array.isArray(value)) return !!value.length;

    return value === undefined || value === null ? false : !!String(value).length;
  },
  message: function message(field, val) {
    return __WEBPACK_IMPORTED_MODULE_0__errorMessages__["a" /* default */].getErrorMessage('required', field, val);
  }
};

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Hello_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Hello_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Hello_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ErrorMessages_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ErrorMessages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ErrorMessages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PrismCode_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PrismCode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_PrismCode_vue__);






/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app',

  data: function data() {
    return {
      match: {
        firstName: null,
        lastName: null,
        message: ''
      },
      errorHtml: '<form>\n  <input type="text" v-model="name">\n  <ul>\n    <li v-for="error in $v.name.$errors">\n      {{ error.message }}\n    </li>\n  </ul>\n</form>',
      inputClasses: '<input type="text" v-model="name" v-validity>',
      parentCustomComponent: '<!-- Parent component. -->\n<input type="text" v-model="form.username">\n<custom-password v-model="form.password"></custom-password>',
      childCustomComponent: '<!-- custom-password child component -->\n<input type="text" placeholder="Password" :value="value" @input="onInput($event.target.value)" v-validity>\n<ul>\n  <li v-for="error in $v.$errors">\n    {{ error.message }}\n  </li>\n</ul>'
    };
  },


  computed: {
    something: function something() {
      return '';
    }
  },

  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$v.$validate().then(function () {
        if (_this.$v.$valid) {
          console.log('valid!');
        } else {
          console.log('not valid!');
        }
      });
    }
  },

  mounted: function mounted() {
    this.$v.$setErrors([{
      field: 'lastName',
      message: 'fail'
    }]);
  },


  validations: {
    match: {
      firstName: ['required', 'minlength:4'],

      lastName: {
        required: {
          validate: function validate(val, options) {
            return !!val;
          },
          message: function message(field, options) {
            return 'last name is required!!!';
          }
        }
      },

      message: ['required']
    }
  },

  components: {
    ErrorMessages: __WEBPACK_IMPORTED_MODULE_1__components_ErrorMessages_vue___default.a,
    Hello: __WEBPACK_IMPORTED_MODULE_0__components_Hello_vue___default.a,
    PrismCode: __WEBPACK_IMPORTED_MODULE_2__components_PrismCode_vue___default.a
  }
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  props: ['model']
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorMessages_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorMessages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ErrorMessages_vue__);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'hello',
  props: ['value'],
  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    }
  },

  components: {
    ErrorMessages: __WEBPACK_IMPORTED_MODULE_0__ErrorMessages_vue___default.a
  }
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);




/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },

  mounted: function mounted() {
    var code = this.$refs.prism.innerText.trim();

    this.$refs.prism.innerHTML = __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages[this.language]);
  }
};

/***/ })

},[125]);
});