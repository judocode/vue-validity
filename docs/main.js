import Vue from 'vue'
import App from './App'
import Validity from '../src/index'

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

Vue.use(Validity, validityConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
