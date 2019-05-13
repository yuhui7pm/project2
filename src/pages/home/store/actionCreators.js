import axios from "axios";
import  * as constants from './constants';

export const getHomeInfo=()=>{
	return (dispatch)=>{
			axios.get('/api/home.json').then((res)=>{
				const result = res.data.data;
				dispatch(changeHomeData(result));
			}).catch()
	}
};

export const toggle=(flag)=>({
	type:constants.TOGGLE,
	flag
});


export const getMoreList=(page)=>{
	return (dispatch)=>{
		axios.get('/api/homeMoreList.json?page='+page).then((res)=>{
			const result = res.data.data;
			dispatch(getMore(result,page+1))
		}).catch()
	}
};

const changeHomeData = (result)=>({
	type:constants.DATAFROMJSON,
	topicList:result.topicList,
	articleList:result.articleList,
	recommendList:result.recommendList,
	writerList:result.writerList
});

const getMore = (result,page) =>({
	type:constants.GETMORELIST,
	articleList:result.articleList,
	page
});
