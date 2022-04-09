<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="okx-home">
		<Trend></Trend>
	</div>
</template>

<script>
import Trend from './Trend';

export default {
	components: {
		Trend,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.okx-home{
	width: 100%;
	@include flexColumnStart();
}

</style>
