import styled from 'styled-components'
export const Article = styled.div`
	width:620px;
	margin:0 auto;
`

export const LoginWrapper = styled.div`
	width:400px;
	height:500px;
	background:white;
	border-radius:5px;
	border:2px solid #f0f0f0;
	box-shadow:0 0 8px rgba(0,0,0,0.1);
	margin:0 auto;
	margin-top:100px;
	.Info{
		height:50px;
		width:100px;
		width:300px;
		margin:0 auto;
		margin-top:20px;
		color:#999;
		font-size:14px;
		span{
			float:right;
		}
	}
`

export const LoginTop = styled.div`
	width:200px;
	padding-top:50px;
	height:30px;
	line-height:30px;
	color:#ea6f5a;
	margin:0 auto;
	.dot{
		font-size:50px;
	}
`

export const LoginRegister = styled.div`
	width:32%;
	height:42px;
	float:left;
	text-align:center;
`

export const Input = styled.input`
	width:91%;
	height:50px;
	float:left;
	padding-left:10px;
	outline:none;
	border:none
	box-sizing:border-box;
	background:none;
`

export const InputWrapper = styled.div`
	width:305px;
	height:100px;
	margin:0 auto;
	margin-top:60px;
	color:#c8c8c8;
	background:rgba(181,181,181,0.1);
	border:1px solid #c8c8c8;
	border-radius:4px;
	.inputIcon{
		float:left;
		height:50px;
		line-height:50px;
		color:grey;
		padding-left:10px;
	}
	div{
		clear:both;
	}

	.password{
		border-top:1px solid #c8c8c8;
	}
`

export const LoginButton = styled.button`
	width:300px;
	height:44px;
	background:#3194D0;
	color:#fff;
	font-size:18px;
	font-weight:bold;
	display:block;
	margin:0 auto;
	border:none;
	border-radius:22px;
	outline:none;
`

export const Line = styled.div`
	width:300px;
	height:12px;
	color:#b5b5b5;
	margin:30px auto;
	text-align:center;
	font-size:12px;
	margin-bottom:40px;
	::before{
		content:"";
		width:70px;
		height:1px;
		border-bottom:0.5px solid grey;
		margin:0 20px 5px 0;
		display:inline-block;
		border-color:#b5b5b5;
	}
	::after{
		content:"";
		width:70px;
		height:1px;
		border-bottom:0.5px solid grey;
		margin:0 0 5px 20px;
		display:inline-block;
		border-color:#b5b5b5;
	}
`

export const IconWrapper = styled.div`
	width:250px;
	height:50px;
	margin:0 auto;
	padding-left:40px;
	.iconfont{
		display:inline-block;
		width:25%;
		font-size:23px;

	}
	.weibo{
		color:red;
	}
	.wechat{
		color:green;
	}
	.qq{
		color:blue
	}
	.douban{
		color:darkgreen;
	}
`
	