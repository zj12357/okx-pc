<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="about-container">
		<div class="about-main">
			<h2>关于我们</h2>
			{{$store.state.webTitle}}是全球著名的基金投资交易平台之一，主要面向全球基金,股票投资服务。
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.about-container {
	width: 100%;
	@include flexColumnStart();
	background-color: #fff;
	padding: 40px;
	height: calc(100% - 133px);
	.about-main {
		color: #3f475a;
		font-size: 22px;
		margin-top: 30px;
		h2 {
			font-size: 28px;
			color: #000;
			text-align: center;
			margin-bottom: 40px;
			font-weight: bold;
		}
	}
}
</style>
