const React = require('react');

class SimpleReactHeader extends React.Component {
	render() {
		let myButtonLabel = (this.props.shouldToggleDetails? "toggle is now on" : "toggle is off");
		
		return (	
			<div className="simple-react-header">
				<div className="simple-react-header-left">
					HEADER
				</div>
				<div className="simple-react-header-right">
					<button class={"btn btn-default" + (this.props.shouldToggleDetails ? " btn-active" : "")} onClick={(evt) => { this.props.stateUpdateFunction(evt); }}>
						{myButtonLabel}
					</button>
				</div>
			</div>
		);
	}
}

module.exports = SimpleReactHeader;