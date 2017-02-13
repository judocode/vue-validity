import required from './required'
import minlength from './minlength'

export default {
  required,
  minlength,

  add (name, validator) {
    if (this[name]) {
      this[name] = Object.assign(this[name], validator)
      return
    }

    this[name] = validator
  }
}
