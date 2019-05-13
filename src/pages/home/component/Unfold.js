import React,{ PureComponent } from 'react';
import { FoldMore,Line } from '../style.js';
import {connect} from 'react-redux';
import {actionCreator} from '../store/index.js'

class UnFoldButton extends PureComponent{
	render(){
		const {getMoreList,page} = this.props;
		return(
			<div>
				<Line></Line>
				<FoldMore onClick={()=>getMoreList(page)}>
					加载更多
				</FoldMore>
			</div>

		)
	}
}

const mapStoreToProps=(state)=>({
	page:state.getIn(["home","articlePage"])
});

const mapDispatchToStore=(dispatch)=>({
	getMoreList(page){
		dispatch(actionCreator.getMoreList(page))
	}
});

export default connect(mapStoreToProps,mapDispatchToStore)(UnFoldButton);
