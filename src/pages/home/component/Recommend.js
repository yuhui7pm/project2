import React,{ PureComponent } from 'react';
import {RecommendWrap,RecommendItem,QRcodeWraper,Introduce} from '../style.js';
import {connect} from 'react-redux';

class Recommend extends PureComponent{
	render(){
		const {list} = this.props;
		return(
			<RecommendWrap>
				{
					list.map((item)=>{
						return(
							<RecommendItem
								key={item.get("id")}
								ImgURL={item.get("ImgUrl")} 
							>
							</RecommendItem>
						)
					})
				}
				<QRcodeWraper>
					<img 
						className="pic"
						src="https://images.weserv.nl/?url=https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
						alt="简书手机二维码"     
					/>
					<Introduce>
						<div>
							<h2 className="title">下载简书手机APP</h2>
							<span className="iconfont arrow">&#xe504;</span>
						</div>
						<p className="context">随时随地发现和创作新内容</p>
					</Introduce>
				</QRcodeWraper>
			</RecommendWrap>
		)
	}
}
const mapStoreToProps = (state) =>{
	return{
		list:state.getIn(["home","recommendList"])
	}
}

export default connect(mapStoreToProps,null)(Recommend);