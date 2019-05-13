import React,{ PureComponent } from 'react';
import { WriterListWrap,Title,WriterItem,AuthorInfo,ClickFocus,FoldUp } from '../style.js';
import { connect } from 'react-redux';

class Writer extends PureComponent{
	render(){
		const {list} = this.props;
		return(
			<WriterListWrap>
				<Title>
					推荐作者
					<span 
						className="iconfont spin"
						ref = {(icon)=>{this.spinIcon=icon}}
					>
						&#xe685;
						换一批
					</span>
				</Title>
				{
					list.map((item)=>{
						return(
								<WriterItem key={item.get("id")}>
									<img 
										className="authorPic"
										src={item.get("ImgUrl")}
										alt={item.get("name")}
									/>
									<AuthorInfo>
										<h2 className="authorName">{item.get("name")}</h2>
										写了{item.get("countNumber")}k字 
										<span className="iconfont dot">&#xe616;</span>
										{item.get("likeStar")}k喜欢
									</AuthorInfo>
									
									<ClickFocus>
										<span className="iconfont focus">&#xe69f;</span>
										关注
									</ClickFocus>
								</WriterItem>
						)
					})
				}
				<FoldUp>
					查看全部
					<span className="iconfont arrow">&#xe504;</span>
				</FoldUp>
			</WriterListWrap>
		)
	}
}

const mapStoreToProps = (state) =>{
	return{
		list:state.getIn(["home","writerList"])
	}
}


export default connect(mapStoreToProps,null)(Writer);