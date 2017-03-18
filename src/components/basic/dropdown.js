import * as React from 'react';
import Radium from 'radium';
import cssUtil from '../../css/cssUtil';
const _style = {
	container: {
		position: 'relative',
		display: 'inline-block',
		border: "1px solid gray",
		padding: '2px 0'
	},
	label: {
		fontSize: 14 + "px",
		padding: "0 5px",
		cursor: 'pointer'
	},
	content: {
		display: 'none',
		position: 'absolute',
		backgroundColor: '#f9f9f9',
		padding: '4px 5px',
		zIndex: 1
	},
	open: {
		display: 'block'
	}
};

class SelectItem extends React.Component {
	render() {
		const {children, container, data} = this.props;
		return <li className={ data._selected ? 'active' : '' } onClick={ (e) => {
			container.selectItem(this.props.data, e);
		} }> { children } </li>
	}
}

@Radium
class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			selected: this.props.selected
		};
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.closeDropDown = this.closeDropDown.bind(this);
		this.selectItem = this.selectItem.bind(this);
	}
	
	componentDidMount() {
		document.addEventListener('click', this.closeDropDown);
	}
	
	closeDropDown() {
		if (this.state.open === true) {
			this.setState({
				open: false
			})
		}
	}
	
	toggleDropDown(e) {
		e.nativeEvent.stopImmediatePropagation();
		this.setState({
			open: !this.state.open
		});
	}
	
	selectItem(selectedData, e) {
		const {onChange} = this.props;
		const {_selected, _index, ...data} = selectedData;
		if (onChange(data) !== false) {
			this.setState({
				open: false,
				selected: _index
			})
		} else {
			e.nativeEvent.stopImmediatePropagation();
		}
	}
	
	render() {
		const {open, selected} = this.state;
		let {options, style} = this.props;
		const iconClass = "iconfont icon-" + (open ? "xiangxia1" : "xiangshang1");
		const contentList = options.map((opt, i) => {
			let optData = Object.assign({}, opt, {_selected: i === selected, _index: i});
			return <SelectItem key={ i } data={ optData }
			                   container={ this }> { opt.text } </SelectItem>;
		});
		return <div style={ [_style.container, style.container] }>
			<span style={ [_style.label, style.label] } onClick={ this.toggleDropDown }> { options[selected].text }<i
				className={ iconClass }/>
			</span>
			<ul style={ [cssUtil.ulReset, _style.content, open ? _style.open : {}] }>
				{ contentList }
			</ul>
		</div>
	}
	
	shouldComponentUpdate(nextProp, nextState) {
		return this.state.open !== nextState.open;
	}
	
	componentWillUnmount() {
		document.removeEventListener('click', this.closeDropDown)
	}
}
DropDown.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	options: React.PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
		if (Object.keys(propValue[key]).indexOf('text') === -1) {
			return new Error(
				`component: ${ componentName }, propName: ${ propFullName }, 必须存在text字段`
			);
		}
	}),
	selected: React.PropTypes.number,
	style: React.PropTypes.object,
};
DropDown.defaultProps = {
	style: {},
	selected: 0
};
export default DropDown;