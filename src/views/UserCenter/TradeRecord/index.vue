<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="trade-record-container">
		<el-card>
			<div class="tarde-record-type">
				<el-form
					ref="ruleFormRef"
					:model="ruleForm"
					:rules="rules"
					label-width="120px"
					class="tarde-record-form"
					label-position="top"
					size="large"
				>
					<div class="tarde-record-form-left">
						<el-form-item prop="recordDate">
							<el-date-picker
								v-model="ruleForm.recordDate"
								type="daterange"
								range-separator="至"
								start-placeholder="开始时间"
								end-placeholder="结束时间"
							/>
						</el-form-item>
						<el-form-item prop="typeValue">
							<el-select
								v-model="ruleForm.typeValue"
								placeholder="请选择类型"
							>
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								/>
							</el-select>
						</el-form-item>
					</div>

					<div class="tarde-record-form-right">
						<el-form-item>
							<el-button
								type="primary"
								@click="submitForm(ruleFormRef)"
								>查询</el-button
							>
						</el-form-item>
					</div>
				</el-form>
			</div>
			<div class="wallet-no-data">
				<el-empty description="暂无记录" />
			</div>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="Date" width="180" />
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
			</el-table>
		</el-card>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
export default {
	setup() {
		const ruleFormRef = ref();

		const tableData = [
			{
				date: '2016-05-03',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
			},
			{
				date: '2016-05-02',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
			},
			{
				date: '2016-05-04',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
			},
			{
				date: '2016-05-01',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
			},
		];
		const options = [
			{
				value: 'Option1',
				label: '买入',
			},
			{
				value: 'Option2',
				label: '卖出',
			},
		];

		const ruleForm = reactive({
			recordDate: '',
			typeValue: '',
		});
		const rules = reactive({
			recordDate: [
				{
					required: false,
				},
			],
			typeValue: [
				{
					required: false,
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
		return {
			tableData,
			options,
			ruleFormRef,
			ruleForm,
			submitForm,
			rules,
		};
	},
};
</script>

<style lang="scss" scoped>
.trade-record-container {
	width: 100%;
	.tarde-record-type {
		.tarde-record-form {
			width: 100%;
			@include flexAroundCenter();
			&-left {
				@include flexCenter();
				.el-form-item {
					margin: 0 10px;
				}
			}
			&-right {
				@include flexCenter();
				.el-form-item {
					margin-bottom: 0;
				}
			}
		}
	}
}
</style>
