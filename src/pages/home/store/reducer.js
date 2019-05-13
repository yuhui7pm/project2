import { fromJS } from 'immutable'
import  * as constants from './constants'

const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	writerList:[],
	ToTopShow:true,
	articlePage:1
})

export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.DATAFROMJSON:
			return state.merge({
				topicList:fromJS(action.topicList),
				articleList:fromJS(action.articleList),
				recommendList:fromJS(action.recommendList),
				writerList:fromJS(action.writerList)
			});
			
		case constants.TOGGLE:
			return state.set("ToTopShow",action.flag);
			
		case constants.GETMORELIST:
			return state.merge({
				articleList:state.get("articleList").concat(fromJS(action.articleList)),
				articlePage:fromJS(action.page)
			});
		default:
			return state;
	}
}
