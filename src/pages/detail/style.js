import styled from 'styled-components'
export const Article = styled.div`
	width:620px;
	margin:0 auto;
`

export const Title = styled.div`
	width:620px;
	height:48px;
	font-size:34px;
	line-height:48px;
	padding-top:30px;
	color:#333333;
	font-weight:bold;
`

export const Author = styled.div`
	width:620px;
	height:50px;
	box-sizing:border-box;
	margin:30px 0 40px 0;
	.AuthorImg{
		width:48px;
		height:48px;
		border-radius:24px;
		border:1px solid #dcdcdc;
		float:left;
	}
`

export const AuthorInfoTop = styled.div`
	margin:5px 0 0 15px;
	min-width:400px;
	height:20px;
	float:left;
	box-sizing:border-box;
	span{
		font-size:16px;
		float:left;
		color:#333333;
	}
	img{
		margin:0 15px;	
		width:20px;
		height:20px;
		float:left;
		border:none;
	}
	.focus{
		width:100%;
		font-size:13px;
		color:white;
		height:18px;
		line-height:18px;
		text-align:center;
	}
`
export const FocusBlock = styled.div`
	width:60px;
	height:18px;
	border-radius:9px;
	background:#42c02e;
	float:left;
`

export const AuthorInfoBottom = styled.div`
	min-width:500px;
	height:14px;
	float:left;
	line-height:14px;
	margin:5px 0 5px 15px;
	float:left;
	span{
		font-size:12px;
		color:#969696;
		margin-left:12px;
	}
	.commentDiamond{
		color:#ea6f5a;
		font-size:12px;
		height:14px;
		line-height:14px;
		margin:0;
	}
`

export const Context = styled.div`
	height:27px;
	line-height:27px;
	color:#2f2f2f;
	p{
		font-size:16px;
		padding-bottom:25px;
		text-indent:2em;	
		clear:both;
	}
`

export const Pic = styled.div`
	width:100%;
	text-align:center;
`
export const PicInfo = styled.div`
	color:#969696;
	font-size:14px;
	margin: 0 auto;
	text-align:center;
	max-width:200px;
	height:40px;
	line-height:40px;
	margin-bottom:20px;
	padding-bottom:5px;
	border-bottom:1px solid #d9d9d9;
`

	