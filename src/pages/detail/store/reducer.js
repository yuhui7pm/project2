import {fromJS} from 'immutable';
import * as constants from './constants.js';

const defaultState=fromJS({
	context:[]
})

export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.FROMJSON:
			return state.merge({
				context:fromJS(action.result)
			})
		default:
			return state;
	}
}
