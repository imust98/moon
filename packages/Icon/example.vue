<template>
  <div class="icons">
     <div class="icons-item" v-for="(item,index) in icons" :key="index">
       <Icon :type="item.name" size="32"></Icon>
       <p>{{item.name}}</p>
     </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Icon from './index.vue';
import Icons from './iconnames.js';
export default {
  components: {
    Icon: Icon
  },
  data(){
    return {
      icons:Icons
    }
  }
};
</script>
<style lang="scss" scoped>
 .icons{
        overflow: hidden;
        zoom: 1;
    }
    .icons-item{
        float: left;
        margin: 6px 6px 6px 0;
        width: 145px;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: 100px;
        color: #5C6B77;
        transition: all 0.2s ease;
        position: relative;
        padding-top: 10px;
    }
    .icons-item p{
        padding-top: 15px;
    }
</style>


