# vue-validity

> A simple, powerful and flexible validation library for Vue.js 2.0.

### Features

- Model-based validation.
- Validate custom components.
- Set custom errors (eg. server-side errors) via $setErrors.
- Create custom validators along with custom errors messages.
- Automatically adds input classes based on state (eg. 'dirty', 'invalid', etc.)

## Installation

`npm install --save vue-validity`

```javascript
import Vue from 'vue'
import Validity from 'vue-validity'

// Optionally provide configuration options.
Vue.use(Validity, {})
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
    "$errors": [
      {
        "field": "name",
        "message": "name is required."
      }
    ]
  },
  "$valid": false,
  "$dirty": false,
  "$error": false,
  "$errors": [
    {
      "field": "name",
      "message": "name is required."
    }
  ]
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