import React from 'react';

class Promotion extends React.Component {
	render() {
		return <div style={{background: "url('images/red-tag.png') left center no-repeat", paddingLeft: 26, textTransform: 'lowercase'}}>{this.props.text}</div>;
	}
}

export default Promotion;
