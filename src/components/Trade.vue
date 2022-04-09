<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="trade-container">
		<el-radio-group
			v-model="tabTrade"
			class="trade-tab-btn"
			:fill="tabTrade == 'in' ? '#e35e5e' : '#2ead65'"
		>
			<el-radio-button label="in">买入</el-radio-button>
			<el-radio-button label="out">卖出</el-radio-button>
		</el-radio-group>
		<div class="trade-main">
			<el-form
				ref="ruleFormRef"
				:model="ruleForm"
				label-width="120px"
				class="trade-form"
				:size="formSize"
				label-position="top"
			>
				<el-form-item label="价格" prop="price">
					<el-input v-model="ruleForm.price" />
				</el-form-item>
				<el-form-item label="数量" prop="count">
					<el-input v-model="ruleForm.count" />
				</el-form-item>
				<el-form-item label="金额" prop="amount">
					<el-input v-model="ruleForm.amount" />
				</el-form-item>

				<el-form-item>
					<el-button
						type="primary"
						@click="submitForm(ruleFormRef)"
						class="trade-btn"
						:color="tabTrade == 'in' ? '#e35e5e' : '#2ead65'"
						>{{ tabTrade == 'in' ? '买入' : '卖出' }}</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
	setup() {
		const tabTrade = ref('in');
		const formSize = ref('large');
		const ruleFormRef = ref();
		const ruleForm = reactive({
			price: '',
			count: '',
			amount:'',
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
		return { tabTrade, formSize, ruleFormRef, ruleForm, submitForm };
	},
};
</script>

<style lang="scss" scoped>
.trade-container {
	width: 300px;
	@include flexColumnStart();
	.trade-tab-btn {
		width: 250px;
		@include flexCenter();
		::v-deep .el-radio-button__inner {
			width: 100px;
		}
	}
	.trade-main {
		width: 270px;
		margin-top: 20px;
		.trade-form {
			width: 100%;
		}
		.trade-btn {
			width: 100%;
			margin-top: 20px;
		}
	}
}
</style>
