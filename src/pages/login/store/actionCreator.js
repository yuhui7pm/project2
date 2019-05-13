import axios from "axios";
import  * as constants from './constants';

export const ChangeState = (account,pass)=>{
	return(dispatch)=>{
		axios.get('/api/login.json?account='+account+'&password='+pass).then((res)=>{
			const result=res.data.data;
			if(result){
				dispatch(resetState())	
			}else{
				alert("获取账号密码失败")
			}
		}).catch(console.log())
	}
}

export const loginOut = ()=>({
	type:constants.LOGINOUT,
	value:false
})

const resetState=()=>({
		type:constants.CHANGESTATE,
		value:true
})
