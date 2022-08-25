<template>
  <MallHeader :title='title'/>
  <MallContent :products='products'/>
  <MallFooter :companyName='company'/>
</template>

<script>
import MallHeader from "./components/MallHeader.vue";
import MallContent from "./components/MallContent.vue";
import MallFooter from "./components/MallFooter.vue";

export default {
  name: 'App',
  components: {
    MallHeader,
    MallContent,
    MallFooter,
  },
  data() {
    return {
      title: 'Vue 쇼핑몰',
      products: ['아이폰', '갤럭시22', '아이패드 프로'],
      company: 'vue.ktds',
    };
  }
}
</script>

<style>
</style>
