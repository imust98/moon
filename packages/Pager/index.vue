<template>
  <div class="mo-pager">
    <ul class="pager">
      <li class="pager-item" :class="{'pager-item-disabled':index === 1}" @click="prev">上一页</li>
      <li class="pager-item" :class="{'pager-item-active':index === 1}" @click="changePage(1)">1</li>
      <li class="pager-item pager-item-more" v-if="index - 3 > 1" >...</li>
      <li class="pager-item" v-if="index - 2 > 1" @click="changePage(index - 2)">{{index - 2}}</li>
      <li class="pager-item" v-if="index - 1 > 1" @click="changePage(index - 1)">{{index - 1}}</li>
      <li class="pager-item pager-item-active" v-if="index !== 1 && index !== totalPage">{{index}}</li>
      <li class="pager-item" v-if="index + 1 < totalPage " @click="changePage(index + 1)">{{index + 1}}</li>
      <li class="pager-item" v-if="index + 2 < totalPage" @click="changePage(index + 2)">{{index + 2}}</li>
      <li class="pager-item pager-item-more" v-if="index + 3 < totalPage">...</li>
      <li class="pager-item" v-if="totalPage > 1" :class="{'pager-item-active':index === totalPage}" @click="changePage(totalPage)">{{totalPage}}</li>
      <li class="pager-item" :class="{'pager-item-disabled':index === totalPage}" @click="next">下一页</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Pager',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  computed: {
    totalPage() {
      const num = Math.ceil(this.total / this.pageSize);
      return num || 1;
    }
  },
  methods: {
    changePage(num){
      if(this.index === num) return false;
      this.$emit('on-change',num);
    },
    prev(){
      if(this.index <= 1) return false;
      this.changePage(this.index - 1);
    },
    next(){
      if(this.index >= this.totalPage) return false;
      this.changePage(this.index + 1);
    }
  },
  mounted() {
    // todo
  }
};
</script>
