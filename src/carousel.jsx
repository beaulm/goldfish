import React from 'react';
import Slider from 'react-slick';

class SliderNav extends React.Component {
	render() {
		return <button {...this.props} style={{color: '#333', fontSize: 42}}>{this.props.content}</button>	
	}
}

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {primaryImage: props.primaryImage, activeSlide: 1};
		this.updateMainImageFromActiveSlide = this.updateMainImageFromActiveSlide.bind(this);
	}

	updateMainImageFromActiveSlide(e) {
		e.preventDefault();
		this.setState({primaryImage: this.props.altImages[this.state.activeSlide].image});
	}

	render() {
		let settings = {
			adaptiveHeight: true,
			afterChange: (index) => {
				this.setState({activeSlide: index});
			},
			centerMode: true,
			centerPadding: 0,
			initialSlide: this.state.activeSlide,
			nextArrow: <SliderNav content={'›'} />,
			prevArrow: <SliderNav content={'‹'} />,
			slidesToShow: 1,
			variableWidth: true,
		};
		let viewLargerStyles = {
			background: "url('images/magnifying-glass.png') left center no-repeat",
		    boxSizing: 'border-box',
			color: '#666',
			display: 'block',
			fontSize: 14,
			height: 28,
			lineHeight: '28px',
			margin: 'auto',
			marginBottom: 15,
			paddingLeft: 32,
			textDecoration: 'none',
		    width: 200,
		}
		return (
			<div id="carousel-container">
				<div id="primary-image-container" style={{height: 463}}>
					<img id="primary-image" alt="Ninja" itemProp="image" src={this.state.primaryImage} style={{display: 'block', margin: 'auto'}} />
				</div>
				<a id="view-larger" href="#" onClick={this.updateMainImageFromActiveSlide} title="Make the active thumbnail into the main image" style={viewLargerStyles}>view larger</a>
				<div id="slider-container" style={{height: 65, margin: 'auto', width: 261}}>
					<Slider {...settings}>
						{this.props.altImages.map((image, i) => <img className="slide" key={i} alt="Alternate product image" src={image.image} style={{height: 65, margin: '0 11px', width: 65}} />)}
					</Slider>
				</div>
			</div>
		);
	}
}

module.exports = Carousel;