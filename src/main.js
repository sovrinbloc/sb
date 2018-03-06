import Vue from 'vue'
import App from './App.vue'
 import VueNumberFormating from 'vue-number-formating'

 Vue.use(VueNumberFormating);
 


Vue.component('project-img', {
	props: {
		'img': String,
		'test': String,
	}	,
	template: '<div><img v-bind:src="img"></div>',
});

Vue.component('project-title', {
	template: '<h1><slot></slot></h1>'
});

Vue.component('project-price', {
	props: {
		'from': Number, 
		'to': Number,
	},
	computed: {
		from_money: function(){
			return this.$nF.numberToFormat(this.from)
		},
		to_money: function(){
			return this.$nF.numberToFormat(this.to)
		}
	},
	template: '<h2><strong class="price_from money">{{from_money}}</strong> <strong class="price_to money">{{to_money}}</strong></h2>'
});
new Vue({
  el: '#app',
  render: h => h(App)
})
