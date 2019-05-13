import React,{PureComponent} from 'react';
import {
	LoginWrapper,
	LoginTop,
	LoginRegister,
	InputWrapper,
	Input,
	LoginButton,
	Line,
	IconWrapper
} from './style.js';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreator} from './store/'

class Login extends PureComponent{
	render(){
		return(
			<LoginWrapper>
				<LoginTop>
					<LoginRegister>登录</LoginRegister>
					<LoginRegister className="iconfont dot">&#xe616;</LoginRegister>
					<LoginRegister>注册</LoginRegister>
				</LoginTop>
				<InputWrapper>
					<div>
						<i className="iconfont inputIcon accountInput">&#xe511;</i>
						<Input placeholder="手机号或者邮箱" ref={In=>this.account=In}/>
					</div>
					<div className="password">
						<i className="iconfont inputIcon">&#xe658;</i>
						<Input  placeholder="密码" type="password"  ref={(pass)=>{this.Password=pass}}/>
					</div>
				</InputWrapper>
				<div className="Info">
					<input type="checkbox"/>记住我
					<span>登录遇到的问题?</span>
				</div>
				<Link to="/">
					<LoginButton onClick={()=>{this.props.changeState(this.account,this.Password)}}>
						登录
					</LoginButton>
				</Link>
				<Line>社交账号登录</Line>
				<IconWrapper>
					<span className="iconfont weibo">&#xe634;</span>
					<span className="iconfont wechat">&#xe666;</span>
					<span className="iconfont qq">&#xe63e;</span>
					<span className="iconfont douban">&#xe622;</span>
				</IconWrapper>
			</LoginWrapper>
		)
	}
}

const mapDispatch = (dispatch)=>({
	changeState(account,pass){
		dispatch(actionCreator.ChangeState(account.value,pass.value));
	}
});

export default connect(null,mapDispatch)(Login) ;
