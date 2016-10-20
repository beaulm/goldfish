import React from 'react';
import Slider from 'react-slick';

class SliderNav extends React.Component {
	render() {
		return <img {...this.props} alt={this.props.title} src={this.props.src} style={{height: 19, width: 10}} />
	}
}

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {primaryImage: this.props.primaryImage, activeSlide: 1, altImages: this.props.altImages};
		this.state.altImages.push(this.props.primaryImage);
		this.updateMainImageFromActiveSlide = this.updateMainImageFromActiveSlide.bind(this);
	}

	updateMainImageFromActiveSlide(e) {
		e.preventDefault();
		this.setState({primaryImage: this.state.altImages[this.state.activeSlide]});
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
			nextArrow: <SliderNav src={'images/right-arrow.png'} title="Next" />,
			prevArrow: <SliderNav src={'images/left-arrow.png'} title="Previous" />,
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
			<div className="carousel-container">
				<div className="primary-image-container" style={{height: 463}}>
					<img className="primary-image" alt="Ninja" height={400} itemProp="image" src={this.state.primaryImage.image} style={{display: 'block', margin: 'auto'}} width={400} />
				</div>
				<a className="view-larger" href="#" onClick={this.updateMainImageFromActiveSlide} title="Make the active thumbnail into the main image" style={viewLargerStyles}>view larger</a>
				<div className="slider-container" style={{height: 65, margin: 'auto', width: 261}}>
					<Slider {...settings}>
						{this.state.altImages.map((image, i) => <img className="slide" key={i} alt="Alternate product image" height={65} src={image.image} style={{height: 65, margin: '0 11px', width: 65}} width={65} />)}
					</Slider>
				</div>
			</div>
		);
	}
}

export default Carousel;
