<template>
  <mall-header :title='title'>안녕하세요</mall-header>
  <mall-content :products='products'/>
  <mall-footer :companyName='company'/>
  <button @click="changeCompany('kim soongon')">첫번째 버튼</button>
  <button @click="changeCompany('vue.js')">두번째 버튼</button>
  <h2>{{ addTwoNumbers(4, 5) }}</h2>
  <global-button>눌러주세요</global-button>
</template>

<script>
import MallHeader from "./components/MallHeader.vue";
import MallContent from "./components/MallContent.vue";
import MallFooter from "./components/MallFooter.vue";

import calculator from "./mixins/calculator";

export default {
  name: 'App',
  mixins: [calculator],
  methods: {
    changeCompany(name) {
      this.company = name;
    }
  },
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
