<template>
  <mall-header :title='title'>안녕하세요</mall-header>
  <mall-content :todos='todos'/>
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
import axios from 'axios';

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
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          console.log(res.data);
          this.todos = res.data;
        })
        .catch(err => {
          console.log(err);
        });
  },
  data() {
    return {
      title: '할일 목록',
      todos: [],
      company: 'vue.ktds',
    };
  }
}
</script>

<style>
</style>
