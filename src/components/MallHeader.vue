<template>
  <h1>{{ title }}에 오신것을 환영합니다.</h1>
  <h3><slot/></h3>
  <hr/>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    }
  }
}
</script>

<style>

</style>