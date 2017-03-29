<template>

  <div id="app" class="app">
    <div id="intro" class="intro">
      <h1>vue-validity</h1>
        <a href="https://github.com/jrenton/vue-validity"><img style="position: fixed; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
        <a class="github-button" href="https://github.com/jrenton/vue-validity" data-icon="octicon-star" data-style="mega" data-count-href="/jrenton/vue-validity/stargazers" data-count-api="/repos/jrenton/vue-validity#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star jrenton/vue-validity on GitHub">View on Github</a>
      <h4>A simple, powerful and flexible Vue.js validation library.</h4>
      <h3>Features</h3>
      <ul class="text-left">
        <li>Model-based validation</li>
        <li>Automatically adds classes based on input state</li>
        <li>Programmatically add errors (eg. server-side errors)</li>
        <li>Validate custom components</li>
        <li>Add your own translations</li>
        <li>Create your own custom validations</li>
        <li>Extend existing validations</li>
      </ul>
    </div>
    <div class="navigation">
      <h3>Navigation</h3>
      <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#basic-usage">Basic usage</a></li>
        <li><a href="#display-error-messages">Display error messages</a></li>
        <li><a href="#custom-error-messages">Custom error messages</a></li>
        <li><a href="#custom-validators">Custom validators</a></li>
        <li><a href="#validate-custom-components">Validate custom components</a></li>
        <li><a href="#manually-add-errors">Manually add errors</a></li>
        <li><a href="#input-classes">Input classes</a></li>
        <li><a href="#playground">Playground</a></li>
      </ul>
    </div>
    <div id="installation">
      <h2>Installation</h2>
      <prism-code>npm install --save vue-validity</prism-code>
      <prism-code id="install">
import Vue from 'vue'
import Validity from 'vue-validity'

// Optionally pass in configuration options.
Vue.use(Validity, {})
      </prism-code>
    </div>
    <div id="basic-usage">
      <h2>Basic usage</h2>
      <p>For each value you want to validate, you have to create a key inside validations options.</p>
      <prism-code>
new Vue({
  data () {
    return {
      name: ''
    }
  },
  validations: {
    name: ['required', 'minlength:4']
  }
})
      </prism-code>
      <p>This will result in the following validation object:</p>
      <prism-code>
$v: {
  "name": {
    "required": {
      "$value": false,
      "$message": "name is required."
    },
    "minlength": {
      "$value": true,
      "$message": "name should be at least 4 chars."
    },
    "$valid": false,
    "$dirty": false,
    "$error": false,
    "$errors": []
  },
  "$valid": false,
  "$dirty": false,
  "$error": false,
  "$errors": []
}
      </prism-code>
    </div>
    <div id="display-error-messages">
      <h2>Display error messages</h2>
      <p>A validation library is not all that useful without being able to provide us with error messages that relate to a given field. Luckily, <code>vue-validity</code> makes this very easy! As you can see in the validations object above, we have access to <code>$errors</code> on each property.</p>
      <prism-code language="html">{{ errorHtml }}</prism-code>
      <p>We can display errors in this manner on individual properties, or all validation errors that exist, for use in an error summary, for example.</p>
    </div>
    <div id="custom-error-messages">
      <h2>Custom error messages</h2>
      <p>vue-validity comes with error messages already, however, they are able to be customized. This is helpful when you have translations.</p>
      <p>When installing vue-validity you can add these custom error messages in the the options object under errorMessages.</p>
      <prism-code>
const options = {
  errorMessages: {
    required: '{field} is required'
  }
}

Vue.use(Validity, options)
      </prism-code>
      <p>{field} is just a placeholder for the field that this will be used on. If the field name is "firstName" then you error message will read: "firstName is required".</p>
      <p>Other validators can have their own options as well. For example, a range validator should have two values that we want to use to customize the message. See the <a href="#custom-validators">Custom validators</a> section to read more about this.</p>
    </div>
    <div id="custom-validators">
      <h2>Custom validators</h2>
      <p>The installed validators are great, but you can also easily add your own!</p>
      <prism-code language="javascript">
import Validity from 'vue-validity'

Validity.extend('range', {
  // The order of options is important when you
  // are referencing a validator via a string.
  // Eg. name: ['range:2,3'] is going to depend
  // on this options array matching that first
  // and second value.
  options: [
    {
      name: 'minlength',
      value: 0
    },
    {
      name: 'maxlenth',
      value: 10
    }
  ],

  // Method to return whether the current
  // field is valid based on the given constraints.
  validate (value, options) {
    // You have access to the current value and any
    // options from the options array by their name.
    // Eg. minlength == 0 and maxlength == 10
    return value.length >= options.minlength
            && value.length <= options.maxlength
  }
})
      </prism-code>
      <p>Validators can also be defined directly inline in the validations object.</p>
      <prism-code>
validations: {
  name: {
    required: {
      validate (value) {
        return !!(value)
      },

      message (field) {
        return `${field} is required!`
      }
    }
  }
}
      </prism-code>
    </div>
    <div id="validate-custom-components">
      <h2>Validate custom components</h2>
      <p>Often you find yourself in situations where you want to abstract a certain input field into its own component, either to be shared, or because it has its own set of complex logic that would serve a better purpose in its own component. <code>vue-validity</code> makes this easy, so long as you are using the <a href="https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events"><code>v-model</code> pattern</a> for the custom component.</p>
      <prism-code language="html">{{ parentCustomComponent }}</prism-code>
      <prism-code>
new Vue({
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  validations: {
    form: {
      username: ['required'],
      password: ['required']
    }
  }
})
      </prism-code>
      <prism-code language="html">{{ childCustomComponent }}</prism-code>
      <prism-code>
new Vue({
  props: ['value'],
  methods: {
    onInput (value) {
      this.$emit('input', value)
    }
  }
})
      </prism-code>
      <p>Notice how, in the child component, we didn't have to declare a validations object nor did we have to access the nested property of <code>$v.form.password</code>. In a child component that uses <code>v-model</code>, <code>$v</code> is basically an alias to <code>$v.form.password</code>, or whatever it is based on the context you are in.</p>
    </div>
    <div id="manually-add-errors">
      <h2>Manually add errors</h2>
      <p>There may be times where you would like to manually set your own errors. This is especially helpful when you have server-side errors that come back. Much like each nested property has <code>$reset</code> and <code>$validate</code>, you also have access to <code>$setErrors</code>, which accepts an array of errors:</p>
      <prism-code>
this.$v.$setErrors([
  {
    field: 'name',
    message: 'You cannot do that!'
  }
])
      </prism-code>
    </div>
    <div id="input-classes">
      <h2>Input classes</h2>
      <p>It is common to apply classes to your input fields based on your input's state (whether it is valid, if it has been touched, etc). In order to add this functionality, all you need to do is add the <code>v-validity</code> directive on the input.
      </p>
      <prism-code language="html">{{ inputClasses }}</prism-code>
      <p>This automatically enables 'valid', 'invalid', 'pristine', 'dirty', 'touched', and 'untouched' classes depending on the state of your input.</p>
      <dl>
        <dt>
          touched
        </dt>
        <dd>
          The control has been blurred.
        </dd>
        <dt>
          untouched
        </dt>
        <dd>
          The control has not been blurred.
        </dd>
        <dt>
          valid
        </dt>
        <dd>
          The input is valid.
        </dd>
        <dt>
          invalid
        </dt>
        <dd>
          The input is invalid.
        </dd>
        <dt>
          dirty
        </dt>
        <dd>
          The input has been interacted with.
        </dd>
        <dt>
          pristine
        </dt>
        <dd>
          The input has not been interacted with.
        </dd>
      </dl>
      <p>You can customize the names of these classes via the <code>inputClasses</code> property of the options when you are initializing <code>vue-validity</code>.</p>
      <prism-code>
const options = {
  inputClasses: {
    valid: 'my-valid',
    invalid: 'my-invalid'
  }
}

Vue.use(Validity, options)
      </prism-code>
    </div>
    <div id="playground">
      <h2>Playground</h2>
      <p>Experiment with <code>vue-validity</code> here!</p>
      <form @submit.prevent="submitForm">
        <h3>Example form</h3>
        <input type="text" v-model="match.firstName" placeholder="First name" v-validity />
        <error-messages :model="$v.match.firstName"></error-messages>
        <input type="text" v-model="match.lastName" placeholder="Last name" v-validity />
        <error-messages :model="$v.match.lastName"></error-messages>
        <hello v-model="match.message" class="border-gray"></hello>
        <complex-child :login="login" class="border-gray"></complex-child>
        <button type="submit">
          <template v-if="isSubmittingForm">
            Please wait...
          </template>
          <template v-else>
            Submit
          </template>
        </button>
        <p v-if="isSuccessfulForm && hasSubmittedForm && !isSubmittingForm">Success!</p>
        <p v-if="!isSuccessfulForm && hasSubmittedForm && !isSubmittingForm">Fail!</p>
        <h5>Validation state:</h5>
        <pre class="text-left">$v: {{ $v }}</pre>
      </form>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import ErrorMessages from './components/ErrorMessages.vue'
import PrismCode from './components/PrismCode.vue'
import ComplexChild from './components/ComplexChild.vue'

export default {
  name: 'app',

  data () {
    return {
      match: {
        firstName: null,
        lastName: null,
        message: ''
      },
      login: {
        username: '',
        password: ''
      },
      errorHtml: `<form>
  <input type="text" v-model="name">
  <ul>
    <li v-for="error in $v.name.$errors">
      {{ error.message }}
    </li>
  </ul>
</form>`,
      inputClasses: `<input type="text" v-model="name" v-validity>`,
      parentCustomComponent: `<!-- Parent component. -->
<input type="text" v-model="form.username">
<custom-password v-model="form.password"></custom-password>`,
      childCustomComponent: `<!-- custom-password child component -->
<input type="text" placeholder="Password" :value="value" @input="onInput($event.target.value)" v-validity>
<ul>
  <li v-for="error in $v.$errors">
    {{ error.message }}
  </li>
</ul>`,
      isSuccessfulForm: false,
      isSubmittingForm: false,
      hasSubmittedForm: false
    }
  },

  methods: {
    submitForm () {
      this.isSubmittingForm = true

      setTimeout(() => {
        this.$v.$validate(() => {
          this.hasSubmittedForm = true
          this.isSubmittingForm = false
          this.isSuccessfulForm = this.$v.$valid
        })
      }, 1000)
    }
  },

  mounted () {
    this.$v.$setErrors([{
      field: 'lastName',
      message: 'fail'
    }])
  },

  validations: {
    match: {
      firstName: ['required', 'minlength:4'],

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

      message: ['required']
    },

    login: {
      username: ['required'],
      password: ['required']
    }
  },

  components: {
    ErrorMessages,
    Hello,
    PrismCode,
    ComplexChild
  }
}
</script>

<style lang="less">
@import "./less/prism";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  max-width: 900px;
  margin: 30px auto;
  padding: 0 20px;
}

.error {
  color: red;
}

.text-left, pre {
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
  display: block;
}

input.touched.invalid {
  border: 1px solid red;
}

input.valid {
  border: 1px solid green;
}

.border-gray {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
