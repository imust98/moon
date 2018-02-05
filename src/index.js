
import Icon from '../packages/Icon/index.vue';

const install = function(Vue, config = {}) {
  Vue.component(Icon.name, Icon);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Icon
};