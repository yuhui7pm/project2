// Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。
import { combineReducers } from 'redux-immutable';

//将reducer进行拆分，避免冗长的代码
import { reducer as headerReducer } from '../common/headerComponent/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as LoginIn } from '../pages/login/store';

export default combineReducers({
	header: headerReducer,
	home: homeReducer,
	article: detailReducer,
	login: LoginIn
})
