export default {
  required: '{field} is required.',
  minlength: '{field} should be at least {minlength} chars.',

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

  getErrorMessage (type, field, options) {
    let error = this[type]

    if (!error) {
      return null
    }

    error = error.replace(new RegExp(/{field}/, 'g'), field)

    if (options && options.length) {
      for (let i = 0; i < options.length; i++) {
        const option = options[i]
        error = error.replace(new RegExp(`{${option.name}}`, 'g'), option.value)
      }
    }

    return error
  }
}
