
import Icon from '../packages/Icon/index.vue';
import Dropdown from '../packages/Dropdown/index.vue';
import Button from '../packages/Button/index.vue';
import Pager from '../packages/Pager/index.vue';
import Table from '../packages/Table/index.vue';

const install = function(Vue, config = {}) {
  Vue.component(Icon.name, Icon);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(Button.name, Button);
  Vue.component(Pager.name, Pager);
  Vue.component(Table.name, Table);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Icon,
  Dropdown,
  Button,
  Pager,
  Table
};