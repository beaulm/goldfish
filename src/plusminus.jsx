import React from 'react';

class PlusMinus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 1};
		this.decrementValue = this.decrementValue.bind(this);
		this.incrementValue = this.incrementValue.bind(this);
	}

	decrementValue() {
		this.setState({value: Math.max(1, (this.state.value - 1))});
	}

	incrementValue() {
		this.setState({value: this.state.value + 1});
	}

	render() {
		let containerStyles = {
			border: '1px solid #CCC',
			borderRadius: 2,
			boxSizing: 'border-box',
			height: 40,
			marginBottom: 30,
			padding: '3px 7px 0 10px',
			width: 239
		};

		let buttonStyles = {
			cursor: 'pointer',
			float: 'left',
			height: 30,
			opacity: 1,
			width: 30
		};

		let minusButtonStyles = JSON.parse(JSON.stringify(buttonStyles));
		minusButtonStyles.background = "url('images/minus-button.png') center center no-repeat";
		if(this.state.value === 1) {
			minusButtonStyles.cursor = 'default';
			minusButtonStyles.opacity = .5;
		}

		let plusButtonStyles = JSON.parse(JSON.stringify(buttonStyles));
		plusButtonStyles.background = "url('images/plus-button.png') center center no-repeat";

		let quantityStyles = {
			color: '#000',
			float: 'left',
			fontSize: 15,
			fontWeight: 'bold',
			lineHeight: '30px',
			marginLeft: 13,
			marginRight: 16
		}

		return (
			<div style={containerStyles}>
				<span style={{lineHeight: '32px'}}>quantity:</span>
				<div style={{float: 'right'}}>
					<div aria-label="Decrease quantity by one" style={minusButtonStyles} onClick={this.decrementValue}></div>
					<div style={quantityStyles}>{this.state.value}</div>
					<div aria-label="Increase quantity by one" style={plusButtonStyles} onClick={this.incrementValue}></div>
				</div>
				<input id={this.props.name} name={this.props.name} min="1" step="1" type="number" style={{display: 'none'}} value={this.state.value} readOnly />
			</div>
		);
	}
}

module.exports = PlusMinus;