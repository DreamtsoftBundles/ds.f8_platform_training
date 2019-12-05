const React = require('react');
const ReactDOM = require('react-dom');

const F8ReactComponent = require('react-core/F8ReactComponent');
const SimpleReactBody = require("simple_react/SimpleReactBody");
const SimpleReactHeader = require("simple_react/SimpleReactHeader");

class SimpleReact extends F8ReactComponent {
	constructor(props) {
		super(props);		
	}

    render() {
        return (
			<div className="simple-react-container">
				<SimpleReactHeader shouldToggleDetails={this.state.toggleDetails} stateUpdateFunction={this.stateUpdater.bind(this)} />
				<SimpleReactBody shouldToggleDetails={this.state.toggleDetails}/>
			</div>
        );
    }
	
	stateUpdater() {
		this.setState({ toggleDetails: !this.state.toggleDetails });
	}
}

module.exports = SimpleReact;
