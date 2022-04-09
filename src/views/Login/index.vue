<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="login-container">
		<div class="login-main">
			<h1 class="login-title">欢迎来到{{$store.state.webTitle}}</h1>
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				label-width="120px"
				class="login-form"
				size="large"
				label-position="top"
			>
				<el-form-item label="账号" prop="account">
					<el-input v-model="ruleForm.account" />
				</el-form-item>
				<el-form-item label="登录密码" prop="password">
					<el-input v-model="ruleForm.password" show-password />
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						class="login-btn"
						>登录</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
export default {
	setup() {
		const router = useRouter();
		const store = useStore();
		const ruleFormRef = ref();
		const ruleForm = reactive({
			account: '',
			password: '',
		});
		const rules = reactive({
			account: [
				{
					required: true,
					message: '请输入用户名',
					trigger: 'blur',
				},
				{
					min: 3,
					max: 12,
					message: '长度为3-12位数字或字母组成',
					trigger: 'blur',
				},
			],
			password: [
				{
					required: true,
					message: '请输入密码',
					trigger: 'blur',
				},
				{
					min: 6,
					max: 12,
					message: '长度为6-12位数字或字母组成',
					trigger: 'blur',
				},
			],
		});

		const submitForm = async (formEl) => {
			if (!formEl) return;
			await formEl.validate((valid, fields) => {
				if (valid) {
					console.log('submit!');

					store.dispatch('setToken', 'aaaaaaa').then(() => {
						ElMessage({
							type: 'success',
							message: '登录成功！',
						});
						router.push('/');
					});
				} else {
					console.log('error submit!', fields);
				}
			});
		};
		return { ruleForm, submitForm, rules, ruleFormRef };
	},
};
</script>

<style lang="scss" scoped>
.login-container {
	width: 100%;
	@include flexCenter();
	padding: 100px;
	.login-main {
		width: 500px;
		background: #fff;
		padding: 70px 60px;
		.login-title {
			font-size: 28px;
			font-weight: 700;
		}
		.login-form {
			padding-top: 20px;
		}
		.login-btn {
			width: 100%;
			margin: 20px auto;
		}
	}
}
</style>
