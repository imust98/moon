import Vue from 'vue';
import router from './router';
import App from './App.vue';
import 'highlight.js/styles/vs2015.css';

import Icon from '../packages/Icon/index.vue';
import Dropdown from '../packages/Dropdown/index.vue';
import Button from '../packages/Button/index.vue';
import Pager from '../packages/Pager/index.vue';
import Table from '../packages/Table/index.vue';
import DropdownItem from '../packages/DropdownItem/index.vue';
import DropdownMenu from '../packages/DropdownMenu/index.vue';

Vue.component(Icon.name, Icon);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Button.name, Button);
Vue.component(Pager.name, Pager);
Vue.component(Table.name, Table);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(DropdownMenu.name, DropdownMenu);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
