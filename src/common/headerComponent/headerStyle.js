import styled from 'styled-components';
import logoPic from '../../statics/headerStatics/jianshu_logo.png'
export const HeaderStyle=styled.div`
	height:58px;
	position:relative;
	border:1px solid #f0f0f0
`

export const Logo = styled.div`
	position:absolute;
	width:100px;
	height:100%;
	display:block;
	background:url(${logoPic});
	background-size:contain;
`

export const Nav = styled.div`
	height:100%;
	width:970px;
	margin:0 auto;
	margin-left:165px;
	padding-right:30px;
	box-sizing:border-box;
`

export const NavItem = styled.div`
	&.left{
		float:left;
		color:#ea6f5a
	};
	&.download{
		color:#333333;
	};
	&.right{
		float:right;
		color:#969696;
	};
	&.login{
		padding-right:40px
		font-size:15px;
	}
	.diamond{
		color:#EA6F5A;
	}
	.beta{
		color:#EA6F5A;
	}
	font-size:17px;
	padding:20px 13px;
	box-sizing:border-box;
`
export const NavWrap = styled.div`
	height:100%;
	float:left;
	position:relative;
	.zoom{
		position:absolute;
		right:23px;
		top:14px;
		width:30px;
		line-height:30px;
		border-radius:30px;
		font-size:20px;
		font-weight:bold;
		text-align:center;
		color:#999;
	};
	.toBlack{
		background:#777;
		color:#fff;
	};
	
`

export const NavSearch = styled.input.attrs({placeholder:"搜索"})`
	height:38px;
	width:160px;
	margin:10px 20px;
	padding:0 28px 0 21px;
	border-radius:19px;
	outline:none;
	border:none;
	background:#eeeeee;
	color:#666;
	box-sizing:border-box;
	font-size:14px;
	&::placeholder{
		color:#999;
	}
	&.toLong{
		width:250px;
	}
	
	&.slide-enter{
		transition:all 0.4s ease-out;
	};
	
	&.slide-enter-active{
		width:250px;
	};
	
	&.slide-exit{
		transition:all 0.4s ease-out;
	};
	
	&.slide-exit-active{
		width:160px;
	};
`
export const SearchInfo = styled.div`
	width:250px;
	min-height:157px;
	position:absolute;
	border:0.5px solid #ddd;
	border-radius:5px;
	margin-left:20px;
	box-shadow:0 0 5px #ddd;
	background:white;
`

export const SearchWrap = styled.div`
	width:84%;
	box-sizing:border-box;
	height:80%;
	margin:0 auto;
	margin-top:7%;
	position:relative;
	
`

export const HotSearch = styled.div`
	color:#969696;
	font-size:15px;
	color:grey;
	margin-bottom:15px;
`

export const Change = styled.span`
	top:0;
	right:0;
	color:#969696;
	font-size:14px;
	color:grey;
	position:absolute;
	cursor:pointer;
	.spin{
		font-size:14px;
		height:16px;
		line-height:16px;
		margin:0px 5px 0 0;
		display:block;	
		float:left;
		transform-origin:center center;
		transition:all 0.3s ease-in;
	}
`
export const InfoItem =  styled.div`
	color:#787878;
	padding:0 5px;
	font-size:13px;
	line-height:17px;
	text-align:center;
	height:17px;
	border:1px solid #ddd;
	border-radius:2px;
	float:left;
	margin:0 8px 11px 0px;
`

export const Addition = styled.div`
	width:240px;
	position:absolute;
	height:100%;
	top:0;
	right:0;
`

export const Button = styled.button`
	height:38px;
	width:100px;
	margin:9px 0px 10px 15px;
	border-radius:19px;
	border-color:#e16f5a;
	font-size:15px;
	outline:none;
	&.register{
		width:80px;
		color:#ea6f5a;
		border:1px solid #ea6f5a;
		background:white;
	};
	&.writing{
		color:white;
		border:none;
		background:#ea6f5a;
	};

`

