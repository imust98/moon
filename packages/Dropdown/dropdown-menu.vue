<template>
  <ul class="dropdown-menu"><slot></slot></ul>
</template>
<script>
const prefixCls = '';
export default {
  name:'DropdownMenu'
};
</script>
<style lang="scss">
.dropdown-menu{
  min-width: 100px;
}
</style>


