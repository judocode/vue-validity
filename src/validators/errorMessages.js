export default {
  required: '{field} is required.',

  init (errorMessages) {
    if (!errorMessages) {
      return
    }

    for (const error in errorMessages) {
      if (errorMessages.hasOwnProperty(error)) {
        this[error] = errorMessages[error]
      }
    }
  },

  getErrorMessage (type, field, value) {
    const error = this[type]

    if (!error) {
      return null
    }

    return error.replace(new RegExp(/{field}/, 'g'), field)
                .replace(new RegExp(/{value}/, 'g'), value)
  }
}
