<template>
  <ul>
    <li>{{ products[0] }}</li>
    <li>{{ products[1] }}</li>
    <li>{{ products[2] }}</li>
  </ul>
  <br/>
</template>

<script>
export default {
  props: ['products']
}
</script>

<style>

</style>