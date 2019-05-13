import {constants} from './index'
import {fromJS} from 'immutable'


const defaultState=fromJS({
	focused:false,
	list:[],
	page:1,
	showState:false
});

export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.FOCUS:
			//使用merge，性能更高
			return state.merge({
				"focused":true,
				"showState":true
			});
		case constants.BLUR:
			return state.set("focused",false);
		case constants.GETITEM:
			return state.set("list",action.data);
		case constants.MOUSEIN:
			return state.set("showState",true);
		case constants.MOUSELEAVE:
			return state.set("showState",false);
		case constants.CHANGEITEM:
			return state.set("page",action.page)
		default:
			return state;
	}
}
