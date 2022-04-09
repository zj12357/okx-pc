<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
	<div class="trend-container">
		<Trade></Trade>
		<div class="trend-main">
			<ul class="trend-time-tabs">
				<li
					v-for="(item, index) in timeTabs"
					:key="index"
					:class="{ active: currentIndex === index }"
					@click="changeIndex(index, item)"
				>
					{{ item.name }}
				</li>
			</ul>
			<Minute
				v-if="kLineType === 'area'"
				:klineData="klineData"
				:containerId="containerId"
			></Minute>
			<Day
				v-if="kLineType === 'candle_solid'"
				:klineData="klineData"
				:containerId="containerId"
			></Day>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import moment from 'moment';
import Trade from '../../components/Trade.vue';
import Day from './Day.vue';
import Minute from './Minute.vue';
import { generatedKLineDataList } from '../../utils/kLineChartTools';

export default {
	components: {
		Trade,
		Day,
		Minute,
	},
	setup() {
		const data = reactive({
			kLineType: 'area',
			timeTabs: [
				{ type: 'area', name: '分时', id: 'update-k-line-mh' },
				{ type: 'candle_solid', name: '1分钟', id: 'update-k-line-1m' },
				{ type: 'candle_solid', name: '5分钟', id: 'update-k-line-5m' },
				{
					type: 'candle_solid',
					name: '15分钟',
					id: 'update-k-line-15m',
				},
				{ type: 'candle_solid', name: '1小时', id: 'update-k-line-1h' },
				{ type: 'candle_solid', name: '4小时', id: 'update-k-line-4h' },
				{ type: 'candle_solid', name: '1日', id: 'update-k-line-1d' },
				{ type: 'candle_solid', name: '3日', id: 'update-k-line-3d' },
				{ type: 'candle_solid', name: '1周', id: 'update-k-line-1w' },
				{ type: 'candle_solid', name: '1月', id: 'update-k-line-1M' },
				{ type: 'candle_solid', name: '1年', id: 'update-k-line-1n' },
			],
			currentIndex: 0,
			klineData: generatedKLineDataList(),
			containerId: 'update-k-line-mh',
		});

		const changeIndex = (value, info) => {
			data.currentIndex = value;
			data.kLineType = info.type;
			let timeValue = moment(new Date()).add(value, 'days').valueOf();
			data.klineData = generatedKLineDataList(timeValue);
			data.containerId = info.id;
		};

		return {
			...toRefs(data),
			changeIndex,
		};
	},
};
</script>

<style lang="scss" scoped>
.trend-container {
	width: 100%;
	@include flexBetweenCenter();
	.trend-main {
		flex: 1;
		.trend-time-tabs {
			@include flexStartCenter();
			padding: 16px 6px 16px 16px;
			li {
				font-size: 14px;
				margin: 0 8px;
				color: #909090;
				cursor: pointer;
				&.active {
					color: #fff;
				}
			}
		}
	}
}
</style>
