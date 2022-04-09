<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="wallet-container">
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>总资产</span>
					<div class="wallet-eyes" @click="toggleShow">
						<img
							src="../../../assets/images/user/browse.png"
							alt=""
							v-show="isShowMoney"
						/>
						<img
							src="../../../assets/images/user/hide.png"
							alt=""
							v-show="!isShowMoney"
						/>
					</div>
				</div>
			</template>
			<!-- <div class="wallet-no-data">
				<el-empty description="暂无余额" />
			</div> -->
			<div class="wallet-main">
				<div class="money">
					<img src="../../../assets/images/user/money.png" alt="" />
					<span>{{ isShowMoney ? '1000.00' : '******' }}</span>
				</div>
				<div class="wallet-pay-btn">
					<el-button
						type="primary"
						size="large"
						@click="$router.push('/userCenter/recharge')"
						>充值</el-button
					>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			isShowMoney: false,
		});
		const toggleShow = () => {
			data.isShowMoney = !data.isShowMoney;
		};
		return {
			...toRefs(data),
			toggleShow,
		};
	},
};
</script>

<style lang="scss" scoped>
.wallet-container {
	width: 100%;
	.card-header {
		@include flexStartCenter();
		span {
			color: #1f2533;
			font-size: 24px;
			font-weight: bold;
		}
		img {
			width: 24px;
			margin-left: 6px;
			cursor: pointer;
		}
	}
	.wallet-main {
		width: 100%;
		@include flexCenter();
		.money {
			@include flexCenter();
			margin: 30px 0;
			img {
				width: 44px;
				height: auto;
				margin-right: 6px;
			}
			span {
				color: #1f2533;
				font-size: 38px;
				font-weight: bold;
				min-width: 200px;
			}
		}

		.wallet-pay-btn {
			margin-left: 100px;
		}
	}
}
</style>
