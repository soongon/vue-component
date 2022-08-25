<template>
  <button @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>