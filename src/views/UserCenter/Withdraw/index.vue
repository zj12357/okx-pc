<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="withdraw-container">
		<el-card>
			<template #header>
				<div class="card-header">
					<h1 class="withdraw-title">提现</h1>
				</div>
			</template>

			<Card v-if="!isBindCard"></Card>
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				:rules="rules"
				label-width="120px"
				class="withdraw-form"
				label-position="top"
				size="large"
				v-else
			>
				<el-form-item prop="amount">
					<el-input
						v-model="ruleForm.amount"
						placeholder="请输入金额"
						type="number"
					/>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						class="withdraw-btn"
						>提交</el-button
					>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import Card from './Card.vue';
export default {
	components: {
		Card,
	},
	setup() {
		const ruleForm = reactive({
			amount: '',
		});
		const ruleFormRef = ref(null);
		const isBindCard = ref(false);
		const rules = reactive({
			amount: [
				{
					required: true,
					message: '请输入充值金额',
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
.withdraw-container {
	width: 100%;
	.withdraw-title {
		color: #1f2533;
		font-size: 24px;
		font-weight: bold;
	}
	.withdraw-form {
		@include flexStartCenter();
		width: 500px;
		.withdraw-btn {
			margin-left: 30px;
		}
	}
}
</style>
