<template>
  <div class="error-messages">
    <div class="error" v-for="error in model.$errors">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style>
.error-messages {
  display: none;
}

.invalid.touched + .error-messages {
  display: block;
}

.error {
  color: red;
}
</style>
