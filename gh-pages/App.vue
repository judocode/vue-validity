<template>
  <div id="app">
    <h1>vue-validity</h1>
    <h4>A simple, powerful and flexible Vue.js validation library.</h4>
    <ul class="text-left">
      <li>Model-based validation</li>
      <li>Automatically adds classes based on input state</li>
      <li>Programmatically add errors (eg. server-side errors)</li>
      <li>Add your own translations</li>
      <li>Create your own custom validations</li>
      <li>Extend existing validations</li>
    </ul>
    <form @submit.prevent="submitForm">
      <h3>Example form</h3>
      <input type="text" v-model="match.firstName" placeholder="First name" v-validity>
      <error-messages :model="$v.match.firstName"></error-messages>
      <input type="text" v-model="match.lastName" placeholder="Last name" v-validity>
      <error-messages :model="$v.match.lastName"></error-messages>
      <hello v-model="match.message"></hello>
      <button type="submit">Submit</button>
      <h5>Validation state:</h5>
      <pre class="text-left">$v: {{ $v }}</pre>
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
  margin-top: 30px;
  font-size: 16px;
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

input {
  border-radius: 4px;
  padding: 5px;
  border: 1px solid #ccc;
  outline: 0;
  font-size: inherit;
}

input.touched.invalid {
  border: 1px solid red;
}

input.valid {
  border: 1px solid green;
}
</style>
