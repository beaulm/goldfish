import React from 'react';

class Stars extends React.Component {
	render() {
		let starSize = {
			height: this.props.size,
			width: this.props.size
		}

		let stars = [];
		for(let i=0; i<this.props.outOf; i++) {
			stars.push(<div key={i} className={(i<this.props.value) ? 'star red' : 'star gray'} style={starSize}></div>);
		}

		return (
			<div className="stars-container">{stars}</div>
		);
	}
}

Stars.propTypes = {
	outOf: React.PropTypes.number.isRequired,
	size: React.PropTypes.number.isRequired,
	value: React.PropTypes.number.isRequired
}

export default Stars;
