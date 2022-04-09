<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="user-container">
		<div class="user-main">
			<el-tabs
				v-model="activeName"
				class="demo-tabs"
				@tab-click="handleClick"
			>
				<el-tab-pane
					label="我的资产"
					name="/userCenter/wallet"
				></el-tab-pane>
				<el-tab-pane
					label="交易记录"
					name="/userCenter/tradeRecord"
				></el-tab-pane>
				<el-tab-pane
					label="资金记录"
					name="/userCenter/amountRecord"
				></el-tab-pane>
				<el-tab-pane
					label="充值"
					name="/userCenter/recharge"
				></el-tab-pane>
				<el-tab-pane
					label="提现"
					name="/userCenter/withdraw"
				></el-tab-pane>
			</el-tabs>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
	setup() {
		const router = useRouter();
		const route = useRoute();
		const activeName = ref('/userCenter/wallet');
		const handleClick = (tab) => {
			router.push(tab.props.name);
		};
		onMounted(() => {
			activeName.value = route.path;
		});
		watch(
			() => route.path,
			(val) => {
				activeName.value = val;
			},
		);
		return { activeName, handleClick };
	},
};
</script>

<style lang="scss" scoped>
.user-container {
	width: 100%;
	min-height: calc(100% - 57px);
	background: #fff;
	@include flexColumnStart();
	.user-main {
		width: 1200px;
		margin-top: 10px;
	}
}
</style>
