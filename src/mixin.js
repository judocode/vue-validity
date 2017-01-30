import { validateModel } from './index'

export default {
  beforeCreate () {
    const options = this.$options
    const hasValidations = !!(options.validations)

    if (!hasValidations) {
      return
    }

    const validations = options.validations

    if (typeof options.computed === 'undefined') {
      options.computed = {}
    }

    options.computed.$v = () => validateModel(this, validations)
  }
}
