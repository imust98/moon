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
