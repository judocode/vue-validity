# vue-validity

> A simple, powerful and flexible validation library for Vue.js 2.0.

- Model-based validation.
- Automatically adds input classes based on state with directive (eg. 'dirty', 'invalid', etc.)
- Set custom errors (eg. server-side errors) via $setErrors.
- Create custom validators along with custom errors.
- Translations

## Installation

`npm install --save vue-validity`

```javascript
import Vue from 'vue'
import Validity from 'vue-validity'

// Optionally provide configuration options.
const options = {
  // Name of the directive. Defaults to 'validity'.
  directiveName: 'validity',
  // Name of the input classes to be used.
  inputClasses: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'valid',
    invalid: 'invalid'
  },
  // Specify custom error messages.
  errorMessages: {
    required: '{field} is required????'
  }
}

Vue.use(Validity, options)
```

## Basic usage

For each value you want to validate, you have to create a key inside validations options.

```javascript
export default {
  data () {
    return {
      name: ''
    }
  },
  validations: {
    name: ['required', 'minlength:4']
  }
}
```

This will result in the following validation object:

```javascript
$v: {
  "name": {
    "required": {
      "$value": false,
      "$message": "name is required."
    },
    "minlength": {
      "$value": true,
      "$message": "name should be at least 4 chars."
    },
    "$valid": false,
    "$dirty": false,
    "$error": false,
    "$errors": []
  },
  "$valid": false,
  "$dirty": false,
  "$error": false,
  "$errors": []
}
```

Checkout the docs for more examples: [https://jrenton.github.io/vue-validity/](https://jrenton.github.io/vue-validity/)

## Contributing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)

Original [vuelidate](https://github.com/monterail/vuelidate) work Copyright (c) 2016 Paweł Grabarz & Damian Dulisz