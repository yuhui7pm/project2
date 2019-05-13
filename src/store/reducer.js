import {combineReducers} from 'redux-immutable';
//将reducer进行拆分，避免冗长的代码
import {reducer as headerReducer} from '../common/headerComponent/store';
import {reducer as homeReducer} from '../pages/home/store'; 
import {reducer as detailReducer} from '../pages/detail/store'; 
import {reducer as LoginIn} from '../pages/login/store'; 

export default combineReducers({
	header:headerReducer,
	home:homeReducer,
	article:detailReducer,
	login:LoginIn
})
