<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <br/>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    }
  }
}
</script>

<style>

</style>