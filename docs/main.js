import Vue from 'vue';
import router from './router';
import App from './App.vue';
import 'highlight.js/styles/vs2015.css';

import Icon from '../packages/Icon/index.vue';
import Dropdown from '../packages/Dropdown/index.vue';
import Button from '../packages/Button/index.vue';

Vue.component(Icon.name, Icon);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Button.name, Button);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
