<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="card-container">
		<h1 class="card-title">绑定银行卡</h1>
		<el-form
			ref="ruleFormRef"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
			class="card-form"
			size="large"
			label-position="top"
		>
			<el-form-item label="真实姓名" prop="username">
				<el-input v-model="ruleForm.username" />
			</el-form-item>
			<el-form-item label="银行卡号" prop="bankNumber">
				<el-input v-model="ruleForm.bankNumber" />
			</el-form-item>
			<el-form-item label="提现密码" prop="password">
				<el-input
					v-model="ruleForm.password"
					type="password"
					show-password
				/>
			</el-form-item>
			<el-form-item label="确认提现密码" prop="confirmPassword">
				<el-input
					v-model="ruleForm.confirmPassword"
					type="password"
					show-password
				/>
			</el-form-item>
			<el-form-item>
				<el-button
					type="primary"
					@click="submitForm(ruleFormRef)"
					class="card-btn"
					>提交</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		const ruleForm = reactive({
			username: '',
			bankNumber: '',
			password: '',
			confirmPassword: '',
		});
		const ruleFormRef = ref(null);
		const isBindCard = ref(false);
		const rules = reactive({
			name: [
				{
					required: true,
					message: '请输入真实姓名',
					trigger: 'blur',
				},
			],
			bankNumber: [
				{
					required: true,
					message: '请输入银行卡号',
					trigger: 'blur',
				},
			],
			password: [
				{
					required: true,
					message: '请输入提现密码',
					trigger: 'blur',
				},
			],
			confirmPassword: [
				{
					required: true,
					message: '请再次输入提现密码',
					trigger: 'blur',
				},
			],
		});
		const submitForm = async (formEl) => {
			if (!formEl) return;
			await formEl.validate((valid, fields) => {
				if (valid) {
					console.log(ruleForm);

					console.log('submit!');
				} else {
					console.log('error submit!', fields);
				}
			});
		};

		return { ruleFormRef, ruleForm, rules, submitForm, isBindCard };
	},
};
</script>

<style lang="scss" scoped>
.card-container {
	width: 100%;
	.card-title {
		font-size: 18px;
		color: #929292;
		margin-bottom: 30px;
	}
	.card-form {
		width: 500px;
		.card-btn {
			margin-left: 30px;
		}
	}
}
</style>
