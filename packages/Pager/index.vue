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
<style lang='scss'>
.mo-pager {
  .pager {
    display: inline-block;
  }
  .pager-item {
    display: inline-block;
    vertical-align: middle;
    min-width: 32px;
    height: 32px;
    line-height: 30px;
    margin-right: 4px;
    text-align: center;
    list-style: none;
    background-color: $text-white-color;
    user-select: none;
    cursor: pointer;
    font-family: Arial;
    border: 1px solid $border-base-color;
    border-radius: 4px;
    transition: border 0.2s ease-in-out, color 0.2s ease-in-out;
    &:hover {
      border-color: $primary-color;
      color: $primary-color;
    }
    &-active {
      background-color: $primary-color;
      color: $text-white-color;
      &:hover {
        color: $text-white-color;
      }
    }
    &-disabled {
      cursor: not-allowed;
      color: $input-disabled-text;
      &:hover {
        color: $input-disabled-text;
        border-color: $input-disabled-border;
      }
    }
    &-more {
      &:hover {
        border-color: $border-base-color;
        color: inherit;
      }
    }
  }
}
</style>
