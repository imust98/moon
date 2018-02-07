<template>
  <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<script>
const prefixCls = 'dropdown-item';
import { findComponentUpward } from '../../src/utils/assist';
export default {
  name: 'DropdownItem',
  props: {
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-selected`]: this.selected
        }
      ];
    }
  },
  methods: {
    handleClick(event) {
      const $parent = findComponentUpward(this, 'Dropdown');
      if (this.disabled) {
        return false;
      }
      $parent.$emit('on-click', this.name);
    }
  }
};
</script>
<style lang='scss'>
.dropdown-item {
  margin: 0;
  line-height: normal;
  padding: 7px 16px;
  clear: both;
  color: #495060;
  font-size: 12px !important;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #f3f3f3;
  }
  &-disabled {
    color: #bbbec4;
    cursor: not-allowed;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
