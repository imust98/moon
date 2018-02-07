<template>
  <div>
      <Dropdown @on-click="handleClick">
        <a>下拉菜单</a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem name="xxx">冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
import Vue from 'vue';
import Dropdown from './index.vue';
import DropdownMenu from './dropdown-menu';
import DropdownItem from './dropdown-item';
export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  methods:{
    handleClick(key){
      alert(key);
    }
  }
};
</script>

