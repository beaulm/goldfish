import React from 'react';

class PlusMinus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 1};
		this.decrementValue = this.decrementValue.bind(this);
		this.incrementValue = this.incrementValue.bind(this);
	}

	_changeValue(value) {
		this.setState({value: value});
		window.ga('send', 'event', 'PlusMinus', 'Value changed', 'Quantity', value);
	}

	decrementValue() {
		this._changeValue(Math.max(1, (this.state.value - 1)));
	}

	incrementValue() {
		this._changeValue((this.state.value + 1));
	}

	render() {
		return (
			<div className="plusminus-container">
				<label className="label" htmlFor={this.props.name}>quantity:</label>
				<div className="controls-container">
					<div className="minus-buttom" aria-label="Decrease quantity by one" style={(this.state.value === 1) ? {cursor: 'default', opacity: .5} : null} onClick={this.decrementValue}></div>
					<div className="value-display">{this.state.value}</div>
					<div className="plus-button" aria-label="Increase quantity by one" onClick={this.incrementValue}></div>
				</div>
				<input id={this.props.name} className="hidden" name={this.props.name} min="1" step="1" type="number" value={this.state.value} readOnly />
			</div>
		);
	}
}

PlusMinus.propTypes = {
	name: React.PropTypes.string.isRequired
}

export default PlusMinus;
