import {fromJS} from 'immutable';
import * as constants from './constants.js';

const defaultState=fromJS({
	state:false
})

export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.CHANGESTATE:
			return state.merge({
				state:fromJS(action.value)
			});
		case constants.LOGINOUT:
			return state.merge({
				state:fromJS(action.value)
			});
		default:
			return state;
	}
}
