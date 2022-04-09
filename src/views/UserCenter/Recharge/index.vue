<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="recharge-container">
		<el-card>
			<template #header>
				<div class="card-header">
					<h1 class="recharge-title">充值</h1>
				</div>
			</template>

			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				label-width="120px"
				class="recharge-form"
				label-position="top"
				size="large"
				v-if="!isRecharge"
			>
				<el-form-item prop="amount" label="金额">
					<el-input
						v-model="ruleForm.amount"
						placeholder="请输入金额"
						type="number"
					/>
				</el-form-item>
				<el-form-item prop="amount" label="提现密码">
					<el-input
						v-model="ruleForm.password"
						placeholder="请输入提现密码"
						type="password"
					/>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						class="recharge-btn"
						>提交</el-button
					>
				</el-form-item>
			</el-form>
			<el-result icon="success" title="提交成功" v-if="isRecharge">
				<template #extra>
					<el-button type="primary"
						>提交成功，请联系客服查询</el-button
					>
				</template>
			</el-result>
		</el-card>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		const ruleForm = reactive({
			amount: '',
			password: '',
		});
		const ruleFormRef = ref(null);
		const isRecharge = ref(false);
		const rules = reactive({
			amount: [
				{
					required: true,
					message: '请输入充值金额',
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
		});
		const submitForm = async (formEl) => {
			if (!formEl) return;
			await formEl.validate((valid, fields) => {
				if (valid) {
					console.log(ruleForm);
					isRecharge.value = true;
					console.log('submit!');
				} else {
					console.log('error submit!', fields);
				}
			});
		};
		return { ruleForm, rules, ruleFormRef, submitForm, isRecharge };
	},
};
</script>

<style lang="scss" scoped>
.recharge-container {
	width: 100%;
	.recharge-title {
		color: #1f2533;
		font-size: 24px;
		font-weight: bold;
	}
	.recharge-form {
		width: 500px;

		.recharge-btn {
			margin-left: 30px;
		}
	}
}
</style>
