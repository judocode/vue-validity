<template>
  <div class="hello">
    <h4>Child component in form using v-model</h4>
    <div>
      <input type="text" placeholder="Message" :value="value" @input="onInput($event.target.value)" v-validity />
      <error-messages :model="$v"></error-messages>
    </div>
  </div>
</template>

<script>
import ErrorMessages from './ErrorMessages.vue'

export default {
  name: 'hello',
  props: ['value'],
  methods: {
    onInput (value) {
      this.$emit('input', value)
    }
  },

  components: {
    ErrorMessages
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
