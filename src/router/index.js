import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
		meta: {
			footShow: false,
			requiresAuth: false,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "Login" */ '../views/Login/index.vue'),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(
				/* webpackChunkName: "Register" */ '../views/Register/index.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/termsofService',
		name: 'TermsofService',
		component: () =>
			import(
				/* webpackChunkName: "TermsofService" */ '../views/Agreement/TermsofService.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/privacyPolicy',
		name: 'PrivacyPolicy',
		component: () =>
			import(
				/* webpackChunkName: "PrivacyPolicy" */ '../views/Agreement/PrivacyPolicy.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(
				/* webpackChunkName: "About" */ '../views/Agreement/About.vue'
			),
		meta: {
			footShow: true,
			requiresAuth: false,
		},
	},
	{
		path: '/userCenter',
		name: 'UserCenter',
		redirect: '/userCenter/wallet',
		component: () =>
			import(
				/* webpackChunkName: "UserCenter" */ '../views/UserCenter/index.vue'
			),
		children: [
			{
				path: '/userCenter/wallet',
				name: 'Wallet',
				component: () =>
					import(
						/* webpackChunkName: "UserCenter" */ '../views/UserCenter/Wallet'
					),
				meta: {
					footShow: true,
					requiresAuth: true,
				},
			},
			{
				path: '/userCenter/tradeRecord',
				name: 'TradeRecord',
				component: () =>
					import(
						/* webpackChunkName: "TradeRecord" */ '../views/UserCenter/TradeRecord'
					),
				meta: {
					footShow: true,
					requiresAuth: true,
				},
			},
			{
				path: '/userCenter/amountRecord',
				name: 'AmountRecord',
				component: () =>
					import(
						/* webpackChunkName: "AmountRecord" */ '../views/UserCenter/AmountRecord'
					),
				meta: {
					footShow: true,
					requiresAuth: true,
				},
			},
			{
				path: '/userCenter/recharge',
				name: 'Recharge',
				component: () =>
					import(
						/* webpackChunkName: "UserCenter" */ '../views/UserCenter/Recharge'
					),
				meta: {
					footShow: true,
					requiresAuth: true,
				},
			},
			{
				path: '/userCenter/withdraw',
				name: 'Withdraw',
				component: () =>
					import(
						/* webpackChunkName: "UserCenter" */ '../views/UserCenter/Withdraw'
					),
				meta: {
					footShow: true,
					requiresAuth: true,
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
