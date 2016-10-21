import React from 'react';

class Promotion extends React.Component {
	render() {
		return <div className="promotion">{this.props.text}</div>;
	}
}

Promotion.propTypes = {
	text: React.PropTypes.string.isRequired
}

export default Promotion;
