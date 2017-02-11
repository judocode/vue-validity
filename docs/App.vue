<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <h2>Form</h2>
      <input type="text" v-model="match.firstName" placeholder="First name" v-validity>
      <error-messages :model="$v.match.firstName"></error-messages>
      <input type="text" v-model="match.lastName" placeholder="Last name" v-validity>
      <error-messages :model="$v.match.lastName"></error-messages>
      <hello v-model="match.message"></hello>
      <button type="submit">Submit</button>
      <h5>Validation state:</h5>
      <pre class="text-left">{{ $v }}</pre>
    </form>
  </div>
</template>

<script>

import Hello from './components/Hello.vue'
import ErrorMessages from './components/ErrorMessages.vue'
import required from '../src/validators/required'

export default {
  name: 'app',

  data () {
    return {
      match: {
        firstName: null,
        lastName: null,
        message: '',
      }
    }
  },

  computed: {
    something () {
      return ''
    }
  },

  methods: {
    submitForm() {
      this.$v.$validate().then(() => {
        if (this.$v.$valid) {
          console.log('valid!')
        } else {
          console.log('not valid!')
        }
      })
    }
  },

  mounted() {
    this.$v.$setErrors([{
      field: 'lastName',
      message: 'fail'
    }])
  },

  validations: {
    match: {
      firstName: ['required'],

      lastName: {
        required: {
          validate (val, options) {
            return !!(val)
          },

          message (field, options) {
            return 'last name is required!!!'
          }
        }
      },

      message: ['required'],
    }
  },

  components: {
    ErrorMessages,
    Hello
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

.text-left {
  text-align: left;
}

form {
  border: 1px solid #bbb;
  padding: 10px;
}
</style>
