import React,{ PureComponent } from 'react';
import {TopicWrapper,TopicItem} from '../style.js';
import {connect} from 'react-redux';

class Topic extends PureComponent{
	render(){
		const {list} = this.props;
		return(
			<TopicWrapper>
				{
					list.map((item,index)=>{
						return(
							<TopicItem key={item.get("id")}>
								<img 
									className = "topicImg"
									src={item.get("ImgUrl")}
									alt={item.get("title")}
								/>
								{item.get("title")}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

//获取store的数据
const mapStateToProps = (state)=>{
	return{
		list:state.getIn(['home','topicList'])
	}
}

export default connect(mapStateToProps,null)(Topic) ;