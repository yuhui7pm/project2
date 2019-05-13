import * as contants from './actionType.js';
import axios from 'axios';
import {fromJS} from 'immutable';

const getItemAcion=(data)=>{
	return{
		type:contants.GETITEM,
		data:fromJS(data)
	}
}

export const actionFocus=()=>{
	return{
		type:contants.FOCUS
	}
};
			
export const actionBlur=()=>{
	return{
		type:contants.BLUR
	}
};

//设置show的状态为true
export const mouseIn=()=>{
	return{
		type:contants.MOUSEIN
	}
};

//设置show的状态为false
export const mouseLeave=()=>{
	return{
		type:contants.MOUSELEAVE
	}
};

export const changePages=(page)=>{
	return{
		type:contants.CHANGEITEM,
		page:page
	}
}

export const clickOutsideAction=()=>{
	return(
		alert("nini")
	)
}
export const getList=()=>{
	//异步操作,获取模拟的json数据
	return(dispatch)=>{
		axios.get('./api/headerList.json').then((res)=>{
			dispatch(getItemAcion(res.data.data));
//			console.log(res.data.data)
			}).catch(()=>{
				alert("json引用失败")
		})
	}
}
