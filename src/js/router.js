import VueRouter from 'vue-router'
import footer from '../components/footer.vue'
import home from '../components/home.vue'
import find from '../components/find.vue'
import order from '../components/order.vue'
import mine from '../components/mine.vue'
import store from '../components/store.vue'
import cate from '../components/cate.vue'
import loginRegister from '../components/loginRegister.vue'
import pay from '../components/pay.vue'

export default new VueRouter({
	routes:[
	{
		path:'/',
		component:footer,
		redirect:'/home'
	},
	{
		path:'/footer',
		component:footer,
		children:[
			{
				path:'/home',
				component:home
			},
			{
				path:'/find',
				component:find
			},
			{
				path:'/order',
				component:order
			},
			{
				path:'/mine',
				name:'mine',
				component:mine
			}
		]
	},
	{
		path:'/store',
		component:store
	},
	{
		path:'/cate',
		component:cate
	},
	{
		path:'/loginRegister',
		component:loginRegister
	},
	{
		path:'/pay',
		component:pay
	},
	{
		path:'/*',
		redirect:'/home'
	}
	],
	scrollBehavior(to, from,savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}

})
