import required from './required'
import minlength from './minlength'

export default {
  required,
  minlength,

  add (name, validator) {
    if (this[name]) {
      return
    }

    this[name] = validator
  }
}
