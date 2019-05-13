import React,{PureComponent} from 'react';
import {BackToTop} from '../style.js';
import {actionCreator} from '../store/index.js';
import {connect} from 'react-redux';

class ToTopButton extends PureComponent{
	render(){
		return(
			<div>
				{	
					this.props.ToTopShow?
					<BackToTop onClick ={this.handleScrollTop.bind(this)}>
						<span className="iconfont ToTop">&#xe603;</span>
					</BackToTop>
					:null
				}
			</div>
		)
	}
	
	componentDidMount(){
		window.addEventListener('scroll',this.props.changeScrollState);
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollState);
	}
	
	handleScrollTop(){
		window.scrollTo({
			top:0,
			behavior:"smooth"
		})
	}
}


const mapStoreToProps = (state)=>{
	return{
		ToTopShow:state.get("home").get("ToTopShow")
	}
}

const mapDispatchToStore = (dispatch)=>({
		changeScrollState(){
			if(document.documentElement.scrollTop>500){
				dispatch(actionCreator.toggle(true))	
			}else{
				dispatch(actionCreator.toggle(false))	
			}
		}	
})

export default connect(mapStoreToProps,mapDispatchToStore)(ToTopButton);