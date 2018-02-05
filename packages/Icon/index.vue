<template>
  <i :class="classes" :style="styles"></i>
</template>
<script>
import '../scss/_sprite.scss';
const prefixCls = 'icon';
export default {
  name: 'Icon',
  props: {
    type:{
      type:String,
      default:''
    },
    size:{
      type:String,
      default:'10'
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,`${prefixCls}-${this.type}`
      ];
    },
    styles() {
      const style = {}
      if(this.size) {
        style['fontSize'] = `${this.size}px`;
      }
      return style;
    }
  },
  methods: {
    // todo
  },
  mounted() {
    // todo
  }
};
</script>
<style lang='scss'>
.icon{
  display: inline-block;
}
</style>
