const React = require('react');

class SimpleReactBody extends React.Component {
	render() {
		let details;
		
		if (this.props.shouldToggleDetails) {
			details = (
				<div className="simple-react-body-details-on">
					<p>My details 1</p>
					<p>My details 2</p>
					<p>My details 3</p>
					<p>My details 4</p>
					<p>My details 5</p>
				</div>
			)
		} else {
			details = (
				<div>
					Details turned off
				</div>
			)
		}
		
		return (
			<div className="simple-react-body">
				{details}
			</div>
		);
	}
}

module.exports = SimpleReactBody;