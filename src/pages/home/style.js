import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	height:500px;
	padding-top:30px;
	.imgToggle{
		width:625px;
		height:270px;
	}
`

export const HomeLeft = styled.div`
	width:625px;
	float:left;
`

export const HomeRight = styled.div`
	width:280px;
	float:right;
`

export const TopicWrapper = styled.div`
	margin-top:20px;
	overflow:hidden;	
	padding-bottom:30px;
`

export const TopicItem = styled.div`
	margin:10px 15px 0px 0px;
	float:left;
	height:32px;
	line-height:32px;
	padding-right:10px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topicImg{
		display:block;
		float:left;
		width:32px;
		height:32px;
		margin-right:10px;
	}
`
//下面是内容list的样式部分
export const ContentDeliveryWrap = styled.div`
	position:relative;
	border-top:1px solid #f0f0f0;
	width:623px;
	min-height:50px;
	padding:25px 0 25px 0;
	overflow:hidden;
	.pic{
		width:150px;
		height:100px;
		float:right;
		border-radius:3px;
		margin-top:10px;
	}
`

export const ContentDelivery = styled.div`
	font-size:13px;
	line-height:27px;
	width:458px;
	float:left;
	color:#999999;
	text-align:justify;
	.title{
		color:#333333;
		font-weight:bold
		width:458px;
		font-size:18px;
		float:left;
		text-decoration:none;
	}
`

export const CommentColumn = styled.div`
	height:16px;
	line-height:16px;
	font-size:12px;
	margin-top:10px;
	.iconfont{
		padding-right:3px;
		color:#b4b4b4;
	}
	.commentDiamond{
		color:#ea6f5a;
		font-size:13px;
	}
	.heart{
		font-size:12px;
		margin-left:13px;
	}
	.message{
		font-size:15px;
		margin-left:13px;
	}
`

export const CommentList = styled.span`
	color:#ea6f5a;
	&.author{
		color:#b4b4b4;
		margin-left:15px;
	}
`

//右侧Recommend部分
export const RecommendWrap = styled.div`
	width:280px;
	height:228px;
`

export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	background:url(${(props)=>props.ImgURL});
	background-size:contain;
	margin:0 0 6px;
`

//右边二维码栏
export const QRcodeWraper = styled.div`
	height:60px;
	width:234px;
	padding:10px 22px;
	margin-bottom:30px;
	border:1px solid #f0f0f0;
	border-radius:5px;

	.pic{
		width:60px;
		height:60px;
	}
	.context{
		float:left;
		font-size:13px;
		color:#999999;
	}
`
export const Introduce = styled.div`
	margin-right:10px;
	float:right;
	color:#333333;
	.title{
		font-size:15px;
		margin:10px 0;
		float:left;
	}
	.arrow{
		font-weight:bold;
		margin:10px 15px 10px 0;
		float:right;
	}
`

//右边的推荐作者那一栏
export const WriterListWrap  = styled.div`
	clear:both;
	margin-top:110px;
	min-height:300px;
	width:280px;
`

export const Title = styled.div`
	font-size:14px;
	color:#969696;
	height:22px;
	width:280px;
	.spin{
		font-size:14px;
		color:#969696;
		float:right;
	}
`
export const WriterItem = styled.div`
	width:280px;
	height:48px;
	padding:10px 0 20px 0;
	.authorPic{
		width:48px;
		height:48px;
		border-radius:24px;
		border:1px solid #ddd;
		float:left;
	}
`

export const ClickFocus = styled.div`
	font-size:13px;
	float:right;
	color:#42c02e;
	height:15px;
	line-height:15px;
	margin-top:10px;
	.focus{
		font-size:13px;
		font-weight:bold;
	}
`
export const AuthorInfo = styled.div`
	margin-left:10px;
	font-size:12px;
	color:#969696;
	height:48px;
	float:left;
	.authorName{
		font-size:14px;
		color:#333333;
		padding:6px 0 5px 0px;
	}
	.dot{
		font-size:20px;
		line-height:20px;
		font-weight:bold;
		padding-top:10px;
	}
`

export const FoldUp = styled.div`
	height:35px;
	padding:7px 7px 7px 15px;
	text-align:center;
	font-size:13px;
	color:#787878;
	box-sizing:border-box;
	border:1px solid #dcdcdc;
	border-radius:3px;
	background:#f2f2f2;
`


//回到顶部按钮
export const BackToTop = styled.div`
	height:50px;
	width:50px;
	position:fixed;
	bottom:50px;
	right:40px;
	border:1px solid #dcdcdc;
	border-radius:2px;
	cursor:pointer;
	.ToTop{
		font-size:20px;
		line-height:50px;
		height:50px;
		padding-left:15px;	
	}
`
//按钮：展开更多
export const FoldMore = styled.div`
	background:#a5a5a5;
	height:40px;
	line-height:40px;
	width:100%;
	border-radius:20px;
	cursor:pointer;
	color:#ffffff;
	font-size:15px;
	text-align:center;
	border-top:1px solid #f0f0f0;
	margin:30px 0 400px 0;
`

export const Line = styled.div`
	border-top:1px solid #f0f0f0;
`








