<template>
  <div class="select-dropdown" :class="className" :style="styles"><slot></slot></div>
</template>
<script>
import Vue from 'vue';
const Popper = require('popper.js');
export default {
  name: 'Drop',
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    className: {
      type: String
    }
  },
  data() {
    return {
      popper: null,
      width: ''
    };
  },
  computed: {
    styles() {
      const style = {};
      if (this.width) {
        style.width = `${this.width}px`;
      }
      return style;
    }
  },
  methods: {
    update() {
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.update();
        });
      } else {
        this.$nextTick(() => {
          this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
            gpuAcceleration: false,
            placement: this.placement,
            boundariesPadding: 0,
            forceAbsolute: true,
            boundariesElement: 'body'
          });
          this.popper.onCreate(popper => {
            this.resetTransformOrigin(popper);
          });
        });
      }
    },
    destroy() {
      if (this.popper) {
        this.resetTransformOrigin(this.popper);
        setTimeout(() => {
          if (this.popper) {
            this.popper.destroy();
            this.popper = null;
          }
        }, 300);
      }
    },
    resetTransformOrigin(popper) {
      let placementMap = { top: 'bottom', bottom: 'top' };
      let placement = popper._popper.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      popper._popper.style.transformOrigin = `center ${origin}`;
    }
  },
  created() {
    this.$on('on-update-popper', this.update);
    this.$on('on-destroy-popper', this.destroy);
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
};
</script>
<style lang="scss">
.select-dropdown {
  overflow: visible;
  width: inherit;
  max-height: 200px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 900;
}
</style>
