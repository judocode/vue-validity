<template>
  <div class="hello">
    <h4>Child component in form using v-model</a>
    <div>
      <input type="text" placeholder="Message" :value="value" @input="onInput($event.target.value)" v-validity>
    </div>
    <error-messages :model="$v"></error-messages>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
