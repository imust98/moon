<template>
  <button 
  :type="htmlType" 
  :class="classes" 
  :disabled="disabled" 
  @click="handleClick">
  <span><slot></slot></span>
  </button>
</template>
<script>
const prefixCls = 'mo-btn';
export default {
  name: 'Button',
  props: {
    type: {
      validator(value) {
        return [
          'primary',
          'text',
          'info',
          'success',
          'warning',
          'error',
          'default'
        ].includes(value);
      }
    },
    size: {
      validator(value) {
        return ['small', 'large', 'default'].includes(value);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value);
      }
    },
    long: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSlot: true
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-long`]: this.long,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ];
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  mounted() {
    // todo
  }
};
</script>
