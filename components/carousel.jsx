import React from 'react';
import Slider from 'react-slick';

class SliderNav extends React.Component {
	render() {
		return <img className="slider-nav" {...this.props} alt={this.props.title} src={this.props.src} />
	}
}

SliderNav.propTypes = {
	title: React.PropTypes.string.isRequired,
	src: React.PropTypes.string.isRequired
}

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {primaryImage: this.props.primaryImage, activeSlide: 1, altImages: this.props.altImages};
		this.state.altImages.push(this.props.primaryImage);
		this.updateMainImageFromActiveSlide = this.updateMainImageFromActiveSlide.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.setState({breakpoint: null}), 10);
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
		return (
			<div className="carousel-container">
				<div className="primary-image-container">
					<img className="primary-image" alt="Ninja" height={400} itemProp="image" src={this.state.primaryImage.image} width={400} />
				</div>
				<a className="view-larger" href="#" onClick={this.updateMainImageFromActiveSlide} title="Make the active thumbnail into the main image">view larger</a>
				<div className="slider-container">
					<Slider ref="slider" {...settings}>
						{this.state.altImages.map((image, i) => <img className="slide" key={i} alt="Alternate product image" height={65} src={image.image} width={65} />)}
					</Slider>
				</div>
			</div>
		);
	}
}

Carousel.propTypes = {
	primaryImage: React.PropTypes.object.isRequired,
	altImages: React.PropTypes.object.isRequired
}

export default Carousel;
