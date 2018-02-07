<template>
  <div>
      <Button>按钮<Icon type="close"></Icon></Button>  
  </div>
</template>
<script>
import Vue from 'vue';
import Button from './index.vue';
import Icon from '../Icon/index.vue';
export default {
  components: {
    Button: Button,
    Icon
  }
};
</script>

