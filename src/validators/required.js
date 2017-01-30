import Errors from './errorMessages'

export default {
  validate (value) {
    if (Array.isArray(value)) return !!value.length

    return value === undefined || value === null
      ? false
      : !!String(value).length
  },

  message (field, val) {
    return Errors.getErrorMessage('required', field, val)
  }
}
