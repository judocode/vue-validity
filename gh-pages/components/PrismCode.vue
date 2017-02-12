<template>
  <pre class="prism" ref="prism"><slot></slot></pre>
</template>

<script>
import Prism from 'prismjs'

export default {
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },

  mounted() {
    const code = this.$refs.prism.innerText

    this.$refs.prism.innerHTML = Prism.highlight(code, Prism.languages[this.language])
  }
}
</script>