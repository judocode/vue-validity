<template>
  <div>
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
.error {
  color: red;
}
</style>
