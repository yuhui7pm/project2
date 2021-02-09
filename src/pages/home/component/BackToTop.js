import React, { PureComponent } from 'react';
import { BackToTop } from '../style.js';
import { actionCreator } from '../store/index.js';
import { connect } from 'react-redux';

// PureComponent相比于Component，在shouldComponentUpdate阶段多了一层浅比较。
class ToTopButton extends PureComponent {

	// 子类可以不添加constructor方法，这个方法会被默认添加
	render() {
		return (
			<div>
				{
					this.props.ToTopShow ?
						<BackToTop onClick={this.handleScrollTop.bind(this)}>
							<span className="iconfont ToTop">&#xe603;</span>
						</BackToTop>
						: null
				}
			</div>
		)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.props.changeScrollState);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollState);
	}

	handleScrollTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}
}


const mapStoreToProps = (state) => {
	return {
		ToTopShow: state.get("home").get("ToTopShow")
	}
}

const mapDispatchToStore = (dispatch) => ({
	changeScrollState() {
		if (document.documentElement.scrollTop > 500) {
			dispatch(actionCreator.toggle(true))
		} else {
			dispatch(actionCreator.toggle(false))
		}
	}
})

// UI组件外面包一层容器组件
export default connect(mapStoreToProps, mapDispatchToStore)(ToTopButton);