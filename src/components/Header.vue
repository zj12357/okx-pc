<template>
	<div class="okx-header">
		<h1 class="okx-header-title" @click="$router.push('/')">
			{{$store.state.webTitle}}
		</h1>

		<el-dropdown placement="bottom-end" v-if="token">
			<div class="okx-user-avatar">
				<el-avatar
					src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
				/>
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item>
						<router-link to="/userCenter/wallet">
							<div class="user-nav-item">
								<el-icon color="#79a4ff"
									><wallet-filled
								/></el-icon>
								<span>我的资产</span>
							</div>
						</router-link>
					</el-dropdown-item>
					<el-dropdown-item>
						<router-link to="/userCenter/tradeRecord">
							<div class="user-nav-item">
								<el-icon color="#79a4ff"><document /></el-icon>
								<span>交易记录</span>
							</div>
						</router-link>
					</el-dropdown-item>
					<el-dropdown-item>
						<router-link to="/userCenter/amountRecord">
							<div class="user-nav-item">
								<el-icon color="#79a4ff"><document /></el-icon>
								<span>资金记录</span>
							</div>
						</router-link>
					</el-dropdown-item>
					<el-dropdown-item>
						<router-link to="/userCenter/recharge">
							<div class="user-nav-item">
								<el-icon color="#79a4ff"><bottom /></el-icon>
								<span>充值</span>
							</div>
						</router-link>
					</el-dropdown-item>
					<el-dropdown-item>
						<router-link to="/userCenter/withdraw">
							<div class="user-nav-item">
								<el-icon color="#79a4ff"><top /></el-icon>
								<span>提现</span>
							</div>
						</router-link>
					</el-dropdown-item>
					<el-dropdown-item>
						<div class="user-nav-item" @click="loginOut">
							<el-icon><switch-button color="#79a4ff" /></el-icon>

							<span>退出</span>
						</div>
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
		<div class="okx-header-btn" v-else>
			<el-button @click="$router.push('/login')">登录</el-button>
			<el-button @click="$router.push('/register')">注册</el-button>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
export default {
	setup() {
		const store = useStore();
		const router = useRouter();
		const token = computed(() => store.getters.getToken);
		const loginOut = () => {
			store.dispatch('removeToken').then(() => {
				ElMessage({
					type: 'success',
					message: '退出成功！',
				});
				router.push('/');
			});
		};
		return { token, loginOut };
	},
};
</script>

<style lang="scss" scoped>
.okx-header {
	width: 100%;
	padding: 5px 10px;
	@include flexBetweenCenter();
	.okx-header-title {
		font-size: 26px;
		color: #fff;
		cursor: pointer;
	}
	.okx-header-logo {
		width: 100px;
		cursor: pointer;
		img {
			@include img100();
		}
	}
	.okx-user-avatar {
		width: 50px;
		cursor: pointer;
	}
	.okx-header-btn {
		.van-button {
			margin: 0 5px;
		}
	}
}
.user-nav-item {
	@include flexCenter();
	span {
		color: #000;
		font-size: 14px;
		font-weight: bold;
	}
}
a {
	text-decoration: none;
}
</style>
