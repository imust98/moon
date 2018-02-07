
import Icon from '../packages/Icon/index.vue';
import Dropdown from '../packages/Dropdown/index.vue';
import Button from '../packages/Button/index.vue';

const install = function(Vue, config = {}) {
  Vue.component(Icon.name, Icon);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(Button.name, Button);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Icon,
  Dropdown,
  Button
};