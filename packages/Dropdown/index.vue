<template>
  <div :class="[prefixCls]" v-clickoutside="onClickoutside">
    <div :class="[prefixCls + '-rel']" ref="reference" @click="handleClick"><slot></slot></div>
    <transition name="slide-up">
      <Drop
      v-show="currentVisible"
      :placement="placement"
      ref="drop"
      :data-transfer="transfer"
      v-transfer-dom>
      <slot name="list"></slot></Drop>
    </transition>
  </div>
</template>
<script>
const prefixCls = 'mo-dropdown';
import Drop from './drop.vue';
import clickoutside from '../../src/directives/clickoutside';
import TransferDom from '../../src/directives/transfer-dom';
import { findComponentUpward } from '../../src/utils/assist';
export default {
  name: 'Dropdown',
  directives: {
    clickoutside,
    TransferDom
  },
  components: {
    Drop
  },
  props: {
    trigger: {
      default: 'click'
    },
    placement: {
      validator(value) {
        return [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'botton-start',
          'bottom-end',
          'left',
          'left-start',
          'right',
          'right-start',
          'right-end'
        ].includes(value);
      },
      default: 'bottom'
    },
    visible: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dropdownCls() {
      return {
        [prefixCls + '-transfer']: this.transfer
      };
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      currentVisible: this.visible
    };
  },
  watch: {
    visible(value) {
      this.currentVisible = value;
    },
    currentVisible(value) {
      if (this.value) {
        this.$refs.drop.update();
      } else {
        this.$refs.drop.destroy();
      }
      this.$emit('ob-visible-change', value);
    },
    hasParent() {
      const $parent = findComponentUpward(this, 'Dropdown');
      if ($parent) {
        return $parent;
      } else {
        return false;
      }
    }
  },
  methods: {
    handleClick() {
      this.currentVisible = !this.currentVisble;
    },
    onClickoutside() {
      this.currentVisible = false;
    }
  },
  mounted() {
    const _this = this;
    this.$on('on-click', key => {
      _this.onClickoutside();
    });
  }
};
</script>
