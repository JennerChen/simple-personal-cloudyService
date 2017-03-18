import React from 'react';
import Radium from 'radium';
import cssUtil from '../css/cssUtil';
import DropDown from "./basic/dropdown";

@Radium
class App extends React.Component {
	render() {
		const {children} = this.props;
		const options = [{
			value: "A",
			text: "字母A"
		}, {
			value: "B",
			text: "字母B"
		}];
		return (<div className="clearfix">
			<DropDown options={ options } onChange={(selected) => console.log(selected) }/>
			{ children }
		</div>);
	}
}
export default App;