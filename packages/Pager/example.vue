<template>
  <div>
      <Pager :total="total" :pageSize="pageSize" :index="currentPage" @on-change="changePage"></Pager>
  </div>
</template>
<script>
import Vue from 'vue';
import Pager from './index.vue';
export default {
  components: {
    Pager: Pager
  },
  data() {
    return {
      total: 1200,
      pageSize: 20,
      currentPage: 3
    };
  },
  methods:{
    changePage(num){
      alert(num);
    }
  }
};
</script>
