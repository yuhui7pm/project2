import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class Write extends PureComponent{
	render(){
		const {writeState} = this.props;
		if(writeState){
			return <div>这里是写文章界面</div>
		}else{
			return <Redirect to='/login'/>
		}
	}
}

const mapStore = (state) =>{
	return{
		writeState:state.getIn(["login","state"])
	}
}

export default connect(mapStore,null)(Write);