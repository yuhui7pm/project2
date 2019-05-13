import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store/index.js';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
} from './style.js';
import Topic from './component/Topic.js';
import List from './component/List.js';
import Recommend from './component/Recommend.js';
import Writer from './component/Writer.js';
import ToTopButton from './component/BackToTop.js';
import UnFoldButton from './component/Unfold.js';

//home是UI组件
class Home extends Component{
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img 
						className="imgToggle" src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
						alt="如何在写作中成长"
					/>
					<Topic/>
					<List/>
					<UnFoldButton/>
				</HomeLeft>	
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
				<ToTopButton/>
			</HomeWrapper>
		)
	}
	
	//容器组件不应该有太多的逻辑操作
	componentDidMount(){
		this.props.dataFromJson();
	}
}
	
const mapDispatchToStore = (dispatch)=>({
	dataFromJson(){
		dispatch(actionCreator.getHomeInfo())
	}
})															

export default connect(null,mapDispatchToStore)(Home);