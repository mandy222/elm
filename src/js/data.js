import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		list:[
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0]
		],
		buy:[],
		userPhone:''
		// 0:title 1:price 2:index1 3:index2 4:num 5:delPrice 6:src
	},
	mutations:{
		addNum(state,index){
			state.list[index[0]][index[1]]++;
		},
		subNum(state,index){
			state.list[index[0]][index[1]]--;
			if (state.list[index[0]][index[1]]<0) {
				state.list[index[0]][index[1]]=0;
			}
		},
		changeCont(state,cont){
			// 0:list数组下标1 1:list数组下标2 2:title 3:实际价格 4:num 5:原价格 6:图片路径
			var flag=0;
			var num=state.list[cont[0]][cont[1]];
			if (state.buy.length!=0) {
				for (let i = 0; i < state.buy.length; i++) {
					// 重复则替换或删除
					if(state.buy[i][0]==cont[2]) {
						if (num!=0) {
							// title price 数组下标1 数组下标2
							state.buy.splice(i,1,[cont[2],cont[3],cont[0],cont[1],num,cont[4],cont[5]]);
						} else {
							state.buy.splice(i,1);
						}
						flag=1;
					}
				}
			}
			// 没有重复则加入数组
			if (flag!=1) {
				state.buy.push([cont[2],cont[3],cont[0],cont[1],num,cont[4],cont[5]]);
			}
		},
		init(state){
			state.list=[
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0]
						];
			state.buy=[];
		},
		changeUserPhone(state,cont){
			state.userPhone=cont;
		}
	}
})