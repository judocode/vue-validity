<template>
  <div id="app">
    <input type="text" v-model="match.firstName" v-validity>
    <error-messages :model="$v.match.firstName"></error-messages>
    <input type="text" v-model="match.lastName" v-validity>
    <error-messages :model="$v.match.lastName"></error-messages>
    <pre style="text-align: left;">{{ $v }}</pre>
  </div>
</template>

<script>
import ErrorMessages from './components/ErrorMessages.vue'
import required from '../src/validators/required'

export default {
  name: 'app',

  data () {
    return {
      match: {
        firstName: null,
        lastName: null
      }
    }
  },

  computed: {
    something () {
      return ''
    }
  },
  validations: {
    match: {
      firstName: ['required'],

      lastName: {
        required: {
          validate (val) {
            return !!(val)
          },

          message (field, val) {
            return 'last name is required!!!'
          }
        }
      }
    }
  },

  components: {
    ErrorMessages
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.touched.invalid {
  border: 1px solid red;
}

.error {
  color: red;
}
</style>
