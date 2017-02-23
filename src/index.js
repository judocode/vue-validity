import validationDirective from './directive'
import validationMixin from './mixin'
import errorMessages from './validators/errorMessages'
import validators from './validators/index'

let VueValidity = function (Vue, config) {
  if (VueValidity.isInstalled) {
    return
  }

  if (!config) {
    config = {}
  }

  errorMessages.init(config.errorMessages)

  Vue.directive(config.directiveName || 'validity', validationDirective(config.inputClasses))
  Vue.mixin(validationMixin)

  VueValidity.isInstalled = true
}

if (typeof window !== 'undefined') {
  window.VueValidity = VueValidity
}

VueValidity.extend = function (name, validator) {
  validators.add(name, validator)
}

Object.keys(validators).forEach(function (name) {
  VueValidity.extend(name, validators[name])
})

const getErrorMessage = errorMessages.getErrorMessage

export { validationMixin, validationDirective, VueValidity, getErrorMessage }
export default VueValidity
