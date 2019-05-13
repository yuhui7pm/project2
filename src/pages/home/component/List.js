import React,{ PureComponent } from 'react';
import {ContentDeliveryWrap,ContentDelivery,CommentColumn,CommentList} from "../style.js";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';//4.2.2版本
class List extends PureComponent{
	render(){
		const {list} = this.props;
		return(
				<div>
					{
						list.map((item,index)=>{
							return(
								<ContentDeliveryWrap key={index}>
									<div>
										<ContentDelivery>
											<Link 
												to={'/detail/' + item.get("id")}
												className="title"
											>
												{item.get("title")}
											</Link>
											{item.get("context")}
											
											<CommentColumn>
												<span className="iconfont commentDiamond">&#xe63b;</span>
												<CommentList>{item.get("diamondCount")}</CommentList>
												<CommentList className="author">{item.get("author")}</CommentList>
												<span className="iconfont message">&#xe600;</span>
												{item.get("mess")}
												<span className="iconfont heart">&#xe667;</span>
												{item.get("star")}
											</CommentColumn>
										</ContentDelivery>
										<img
											className="pic"
											src={item.get("ImgUrl")}
											alt={item.get("title")}
										/>
									</div>
							    </ContentDeliveryWrap>
							)
						})					
					}
				</div>
		)
	}
}

const mapStoreToProps=(state)=>{
	return{
		list:state.getIn(["home","articleList"])
	}
}

export default connect(mapStoreToProps,null)(List);