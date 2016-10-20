import React from 'react';

class Stars extends React.Component {
	render() {
		let starStyles = {
			backgroundColor: 'transparent',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			float: 'left',
			height: this.props.size,
			width: this.props.size
		}
		let redStarStyles = JSON.parse(JSON.stringify(starStyles));
		redStarStyles.backgroundImage = "url('images/star-red.png')";
		let grayStarStyles = JSON.parse(JSON.stringify(starStyles));;
		grayStarStyles.backgroundImage = "url('images/star-gray.png')";

		let stars = [];
		for(let i=0; i<this.props.outOf; i++) {
			stars.push(<div key={i} style={(i<this.props.value) ? redStarStyles : grayStarStyles}></div>);
		}

		return (
			<div>{stars}</div>
		);
	}
}

Reviews.propTypes = {
	outOf: React.PropTypes.number.isRequired,
	size: React.PropTypes.number.isRequired,
	value: React.PropTypes.number.isRequired
}

export default Stars;
