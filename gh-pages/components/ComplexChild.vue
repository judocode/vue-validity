<template>
  <div>
    <h4>Child with complex object passed through</h4>
    <input type="text" placeholder="Username" v-model="login.username" v-validity>
    <error-messages :model="$v.login.username"></error-messages>
    <input type="password" placeholder="Password" v-model="login.password" v-validity>
    <error-messages :model="$v.login.password"></error-messages>
  </div>
</template>

<script>
import ErrorMessages from './ErrorMessages'

export default {
  validatable: true,

  props: ['login'],

  components: {
    ErrorMessages
  }
}
</script>
