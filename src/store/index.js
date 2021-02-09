import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

//主要是为了使用谷歌插件redux-dev-tools：可清楚的看清楚每一步操作，有复现的功能
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//引入thunk中间件，异步处理数据。原因是：redux的dispatch默认只能传一个对象参数，redux-thunk的作用就是使dispatch支持传函数参数：
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;
