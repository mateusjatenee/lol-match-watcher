var Vue = require('vue');
Vue.use(require('vue-resource'));

import LoadingSpinner from './components/LoadingSpinner.vue';

Vue.component('loading-spinner', LoadingSpinner);

new Vue({
	el: 'body',
});