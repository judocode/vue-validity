import { validateModel } from './validationVm'
import { getObjectByString } from './utils'

export default {
  beforeCreate () {
    const options = this.$options
    const hasValidations = !!(options.validations)

    const validations = options.validations

    if (typeof options.computed === 'undefined') {
      options.computed = {}
    }

    if (hasValidations) {
      options.computed.$v = () => validateModel(this, validations)
    } else if (options.parent && options.parent.$v) {
      // If the current component has a parent,
      // try and get the name of v-model.
      const parentData = options._parentVnode.data.directives || []
      const directives = parentData.filter(d => d.name === 'model')

      if (directives.length) {
        // Set $v to what the child component v-model refers to.
        const obj = getObjectByString(options.parent.$v, directives[0].expression)
        this.$v = obj
        this.$vChild = true
      }
    }
  }
}
