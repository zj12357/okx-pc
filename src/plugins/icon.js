/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import * as Icons from '@element-plus/icons-vue';

export const stepIcon = (app) => {
	Object.keys(Icons).forEach((key) => {
		app.component(key, Icons[key]);
	});
};
