var Vue = require('vue');

Vue.use(require('vue-resource'));

Vue.component('loading-spinner', LoadingSpinner);

new Vue({
	el: 'body',
});