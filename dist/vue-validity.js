(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-validity"] = factory();
	else
		root["vue-validity"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(30)('wks')
  , uid        = __webpack_require__(20)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(18);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(40)
  , toPrimitive    = __webpack_require__(33)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41)
  , defined = __webpack_require__(25);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(15)
  , hide      = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(46)
  , enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(5)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(63);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(20);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(16)
  , wksExt         = __webpack_require__(35)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__required__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minlength__ = __webpack_require__(56);



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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(12)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(10)(function(){
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(12);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(16)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(47)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(5)
  , Iterators      = __webpack_require__(14)
  , $iterCreate    = __webpack_require__(79)
  , setToStringTag = __webpack_require__(19)
  , getPrototypeOf = __webpack_require__(88)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(4)
  , dPs         = __webpack_require__(44)
  , enumBugKeys = __webpack_require__(27)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(39).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(4)
  , getKeys  = __webpack_require__(11);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(46)
  , hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(5)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(72)(false)
  , IE_PROTO     = __webpack_require__(29)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(15)
  , invoke             = __webpack_require__(75)
  , html               = __webpack_require__(39)
  , cel                = __webpack_require__(26)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(12)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(93)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(14)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(23);
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationVm__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(22);




/* harmony default export */ __webpack_exports__["a"] = {
  beforeCreate: function beforeCreate() {
    var _this = this;

    var component = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this);
    var render = component.$options.render;
    if (typeof render === 'function') {
      console.log(component);
    }

    var options = this.$options;
    var hasValidations = !!options.validations;

    var validations = options.validations;

    if (typeof options.computed === 'undefined') {
      options.computed = {};
    }

    if (hasValidations) {
      options.computed.$v = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validationVm__["a" /* validateModel */])(_this, validations);
      };
    } else if (options.parent && options.parent.$v) {
      var parentData = options._parentVnode.data.directives || [];
      var directives = parentData.filter(function (d) {
        return d.name === 'model';
      });

      if (directives.length) {
        var obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* getObjectByString */])(options.parent.$v, directives[0].expression);
        this.$v = obj;
        this.$vChild = true;
      }
    }
  }
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(59);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorMessages__ = __webpack_require__(21);


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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorMessages__ = __webpack_require__(21);


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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(61);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(60);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(100);
module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(50);
__webpack_require__(102);
__webpack_require__(103);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(52);
module.exports = __webpack_require__(35).f('iterator');

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(49)
  , toIndex   = __webpack_require__(94);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11)
  , gOPS    = __webpack_require__(28)
  , pIE     = __webpack_require__(17);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(15)
  , call        = __webpack_require__(78)
  , isArrayIter = __webpack_require__(76)
  , anObject    = __webpack_require__(4)
  , toLength    = __webpack_require__(49)
  , getIterFn   = __webpack_require__(95)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(14)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(12);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(43)
  , descriptor     = __webpack_require__(18)
  , setToStringTag = __webpack_require__(19)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(11)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(20)('meta')
  , isObject = __webpack_require__(13)
  , has      = __webpack_require__(5)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(10)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(48).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(12)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(11)
  , gOPS     = __webpack_require__(28)
  , pIE      = __webpack_require__(17)
  , toObject = __webpack_require__(32)
  , IObject  = __webpack_require__(41)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(17)
  , createDesc     = __webpack_require__(18)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(33)
  , has            = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(40)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(45).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(5)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(10);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(7)
  , DESCRIPTORS = __webpack_require__(3)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(4)
  , aFunction = __webpack_require__(24)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31)
  , defined   = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(38)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(14);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(70)
  , step             = __webpack_require__(81)
  , Iterators        = __webpack_require__(14)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(85)});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperties: __webpack_require__(44)});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(11);

__webpack_require__(89)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(16)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(15)
  , classof            = __webpack_require__(38)
  , $export            = __webpack_require__(9)
  , isObject           = __webpack_require__(13)
  , aFunction          = __webpack_require__(24)
  , anInstance         = __webpack_require__(71)
  , forOf              = __webpack_require__(74)
  , speciesConstructor = __webpack_require__(92)
  , task               = __webpack_require__(48).set
  , microtask          = __webpack_require__(84)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(90)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(19)($Promise, PROMISE);
__webpack_require__(91)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(80)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(5)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(47)
  , META           = __webpack_require__(83).KEY
  , $fails         = __webpack_require__(10)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(19)
  , uid            = __webpack_require__(20)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(35)
  , wksDefine      = __webpack_require__(34)
  , keyOf          = __webpack_require__(82)
  , enumKeys       = __webpack_require__(73)
  , isArray        = __webpack_require__(77)
  , anObject       = __webpack_require__(4)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(33)
  , createDesc     = __webpack_require__(18)
  , _create        = __webpack_require__(43)
  , gOPNExt        = __webpack_require__(87)
  , $GOPD          = __webpack_require__(86)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(11)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(45).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f  = $propertyIsEnumerable;
  __webpack_require__(28).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(16)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34)('asyncIterator');

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34)('observable');

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_errorMessages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validationMixin", function() { return __WEBPACK_IMPORTED_MODULE_2__mixin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validationDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__directive__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueValidity", function() { return VueValidity; });






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


/* harmony default export */ __webpack_exports__["default"] = VueValidity;

/***/ })
/******/ ]);
});