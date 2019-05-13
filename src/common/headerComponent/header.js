import React,{Component} from 'react';
import {IconGlobalStyle} from '../../statics/iconFont/iconfont.js';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreator} from './store/index.js';
import {Link} from 'react-router-dom'; //4.2.2版本
//import {fromJS} from 'immutable';
import {actionCreator as loginCreator} from '../../pages/login/store/index.js';
import {
	HeaderStyle,
	Logo,
	Nav,
	NavItem,
	NavWrap,
	NavSearch,
	SearchInfo,
	Change,
	InfoItem,
	SearchWrap,
	HotSearch,
	Addition,
	Button
}from './headerStyle.js';


class Header extends Component{
	
	getListArea(){
	const {focused,list,page,mouseInShow,mouseLeaveHide,showState,changeItem} = this.props;
	const listOfJS = list.toJS(); //需要由immutable对象转变成JS对象
	const pages = Math.ceil(listOfJS.length/10);
	const pageItem = []; //存放每一页的items
	if(listOfJS.length){
		for(var i = (page-1)*10;i<page*10;i++){
			if(i<listOfJS.length){
				pageItem.push(<InfoItem key={listOfJS[i]}>{listOfJS[i]}</InfoItem>);
			}
		}
	}
	
	if(focused||showState){
			return(
				<SearchInfo  ref={(no)=>{this.divElement=no}} onMouseEnter = {mouseInShow} onMouseLeave = {mouseLeaveHide}>
					<SearchWrap>
						<HotSearch>热门搜索</HotSearch>
						<Change onClick = {()=>changeItem(page,pages,this.spinIcon)}>
							<span 
								className="iconfont spin"
								ref = {(icon)=>{this.spinIcon=icon}}
							>
								&#xe685;
							</span>
							换一批
						</Change>
						{pageItem}
					</SearchWrap>
				</SearchInfo>
			)
		}else{
			return null;
		};
	};

	render(){
		const {focused,handlerFocus,handlerBlur,list,login,loginout} = this.props;
		return(
			<div>
				<IconGlobalStyle/>
				<HeaderStyle>
					<Link to="/">
						<Logo>
						</Logo>
					</Link>
					<Nav>
						<NavItem className="left">首页</NavItem>
						<NavItem className="left download">下载App</NavItem>
							{
								login?
								<NavItem className="right login" onClick={loginout}>退出</NavItem>
								:<Link to="/login"><NavItem className="right login">登录</NavItem></Link>
							}
						<NavItem className="right">
							<span className="iconfont diamond">&#xe63c;</span>
							<span className="iconfont beta">&#xe66d;</span>
						</NavItem>
						<NavItem className="right">
							<span className="iconfont">&#xe501;</span>
						</NavItem>
						<NavWrap>
							<CSSTransition
								in={focused}
								timeout={400}
								classNames="slide"
							>
								<NavSearch 
								    className={focused?"toLong":""}
									onFocus={()=>{handlerFocus(list)}}
									onBlur={handlerBlur}
								>
								</NavSearch>
							</CSSTransition>
							<span 
								className={focused?"toBlack iconfont zoom":"iconfont zoom"}
							>
								&#xe503;
							</span>
							{this.getListArea()}
						</NavWrap>
					</Nav>
					<Addition>
						<Button className="register">注册</Button>
						<Link to='/write'>
							<Button className="writing">
								<span className="iconfont">&#xe617;</span>
								&nbsp;写文章
							</Button>
						</Link>
					</Addition>
				</HeaderStyle>
			</div>
		);
	}
}


const storeMapToProps = (state)=>{
	return{
		focused:state.getIn(["header","focused"]),
		list:state.getIn(["header","list"]),
		showState:state.getIn(["header","showState"]),
		page:state.getIn(["header","page"]),
		login:state.getIn(["login","state"])
	}
};

const dispatchMapToStore = (dispatch)=>{
	return{
		handlerFocus(list){
			(list.size===0)&&dispatch(actionCreator.getList());
			dispatch(actionCreator.actionFocus());
		},
		handlerBlur(){
			dispatch(actionCreator.actionBlur());
		},
		mouseInShow(){
			dispatch(actionCreator.mouseIn());
		},
		mouseLeaveHide(){
			dispatch(actionCreator.mouseLeave());
		},
		changeItem(page,pages,spin){
			let originalAngle = spin.style.transform.replace(/[^0-9]/gi,'');
			if(originalAngle){
				originalAngle = parseInt(originalAngle,10);
			}else{
				originalAngle = 0;
			}
			spin.style.transform='rotate('+(originalAngle+360)+'deg)';	
			dispatch(actionCreator.changePages(page%pages+1));
		},
		loginout(){
			dispatch(loginCreator.loginOut());
		}
	}
};

export default connect(storeMapToProps,dispatchMapToStore)(Header);