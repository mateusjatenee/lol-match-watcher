var Vue = require('vue');
Vue.use(require('vue-resource'));

import LoadingSpinner from './components/LoadingSpinner.vue';
import Index from './components/home/index.vue';

Vue.component('loading-spinner', LoadingSpinner);

new Vue({
	el: 'body',
	components: {
		Index,
	}
});