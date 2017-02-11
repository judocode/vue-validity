import Errors from './errorMessages'

export default {
  options: [
    {
      name: 'minlength',
      value: 0
    }
  ],

  validate (value, options) {
    const length = parseInt(options.minlength, 10)

    if (Array.isArray(value)) {
      return value.length === 0 || value.length >= length
    }

    return value === undefined || value === null
      ? true
      : value === '' || String(value).length >= length
  },

  message (field, options) {
    return Errors.getErrorMessage('minlength', field, options)
  }
}
