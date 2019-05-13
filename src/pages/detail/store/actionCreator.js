import axios from "axios";
import  * as constants from './constants';

export const FromJson = (id)=>{
	return(dispatch)=>{
		axios.get('/api/articleData.json?id='+id).then((res)=>{
			const result=res.data.data;
			dispatch(getData(result));
		}).catch(console.log())
	}
}

const getData=(data)=>({
		type:constants.FROMJSON,
		result:data.article
})
