import React,{Component} from 'react';
import {
	Article,
	Title,
	Author,
	AuthorInfoTop,FocusBlock,
	AuthorInfoBottom,
	Context,Pic,PicInfo
} from './style.js';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import  {withRouter} from 'react-router-dom'

class Detail extends Component{
	render(){
		const {list} = this.props;
		const articleIndex = this.props.match.params.id-1;
		return(
			<div>
				{
					list.map((item,index)=>{
						return(
							<Article key={index}>
								{
									articleIndex===index?
									<div>
										<Title>
											{item.get("articleTitle")}
										</Title>
										<Author>
											<img 
												className='AuthorImg'
												src={item.get('authorInfoTopImg')}
												alt=""
											/>
											<AuthorInfoTop>
												<span>{item.get('authorName')}</span>
												<img 
													src="https://images.weserv.nl/?url=//cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png"
													alt=""
												/>
												<FocusBlock>
													<span className="iconfont focus">&#xe69f;关注</span>
												</FocusBlock>
											</AuthorInfoTop>
						
											<AuthorInfoBottom>				
												<span className="iconfont commentDiamond">&#xe63b;&nbsp;{item.get('diamondCount')}</span>
												<span>{item.get('articleTime')}</span>
												<span>字数 {item.get('wordNumber')}</span>
												<span>阅读 {item.get('readers')}</span>
												<span>评论 {item.get('comments')}</span>
												<span>喜欢 {item.get('likes')}</span>
											</AuthorInfoBottom>
										</Author>
										
										<Context>
											<p>{item.get("p1")}</p>
											<Pic>
												<img 
													src={item.get('articleImg')}
													alt=""
												/>
												<PicInfo>图片来自简书APP</PicInfo>
											</Pic>
											<p>{item.get('p2')}</p>
											<p>{item.get('p3')}</p>
											<p>{item.get('p4')}</p>
										</Context>
									</div>:<div>第{articleIndex+1}篇文章</div>
								}
							</Article>
						)
					})
				}
			</div>
		)
	}
	componentDidMount(){
		this.props.getData(this.props.match.params.id);
	}
}

const mapStore=(state)=>({
	list:state.getIn(['article','context'])
});

const mapDistch=(dispatch)=>({
	getData(id){
		dispatch(actionCreator.FromJson(id));
	}
})

export default connect(mapStore,mapDistch)(withRouter(Detail));
