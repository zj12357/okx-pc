<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="register-container">
		<div class="register-main">
			<h1 class="register-title">注册{{$store.state.webTitle}}账号</h1>
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				label-width="120px"
				class="register-form"
				size="large"
				label-position="top"
			>
				<el-form-item label="账号" prop="account">
					<el-input v-model="ruleForm.account" />
				</el-form-item>
				<el-form-item label="登录密码" prop="password">
					<el-input v-model="ruleForm.password" show-password />
				</el-form-item>
				<el-form-item label="邀请码(选填)" prop="invitationCode">
					<el-input v-model="ruleForm.invitationCode" />
				</el-form-item>

				<p class="register-declare">
					注册账号即代表您同意了{{$store.state.webTitle}}的
					<router-link to="/termsofService">服务条款</router-link> 和
					<router-link to="/privacyPolicy"
						>隐私政策与声明</router-link
					>
				</p>

				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						class="register-btn"
						>注册</el-button
					>
					<div class="account-login">
						已有账号？<router-link to="/login">登录</router-link>
					</div>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		const ruleFormRef = ref();
		const ruleForm = reactive({
			account: '',
			password: '',
			invitationCode: '',
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
			invitationCode: [
				{
					required: false,
				},
			],
		});

		const submitForm = async (formEl) => {
			if (!formEl) return;
			await formEl.validate((valid, fields) => {
				if (valid) {
					console.log('submit!');
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
.register-container {
	width: 100%;
	@include flexCenter();
	padding: 100px;
	.register-main {
		width: 500px;
		background: #fff;
		padding: 70px 60px;
		.register-title {
			font-size: 28px;
			font-weight: 700;
		}
		.register-form {
			padding-top: 20px;
		}
		.register-btn {
			width: 100%;
			margin: 20px auto;
		}
		.register-declare {
			font-size: 12px;
			line-height: 16px;
		}
		.account-login {
			width: 100%;
			@include flexCenter();
			font-size: 14px;
		}
	}
}
</style>
