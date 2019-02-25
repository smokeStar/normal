// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './language'
import vueIosTimer from 'vue-ios-timer';
import vueMiniPlugin from 'vue-mini-plugin';
import ElTable  from '../node_modules/_element-ui@2.4.9@element-ui/packages/table/index.js';
import ElTableColumn from '../node_modules/_element-ui@2.4.9@element-ui/packages/table-column/index.js';

Vue.prototype.g = { ws : null};

Vue.use(ElTable);
Vue.use(ElTableColumn);

Vue.config.productionTip = false;
Vue.use(vueIosTimer);
Vue.use(vueMiniPlugin);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
