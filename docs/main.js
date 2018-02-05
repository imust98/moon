import Vue from 'vue';
import router from './router';
import App from './App.vue';
import 'highlight.js/styles/vs2015.css';

import Icon from '../packages/Icon/index.vue';

Vue.component(Icon.name, Icon);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
