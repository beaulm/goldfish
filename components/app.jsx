import React from 'react';
import Carousel from './carousel.jsx';
import Promotion from './promotion.jsx';
import PlusMinus from './plusminus.jsx';
import striptags from 'striptags';
import Reviews from './reviews.jsx';

class App extends React.Component {
	render() {
		return (
			<div id="viewport" itemScope itemType="http://schema.org/Product">
				<div id="image-container" className="mobile-centered">
					<h1 id="product-title" itemProp="name">{this.props.data.title}</h1>
					<Carousel primaryImage={this.props.data.Images[0].PrimaryImage[0]} altImages={this.props.data.Images[0].AlternateImages} />
				</div>
				<div id="info-container" className="mobile-centered">
					<meta itemProp="priceCurrency" content={this.props.data.Offers[0].OfferPrice[0].currencyCode} />
					<strong id="price" itemProp="price" content={this.props.data.Offers[0].OfferPrice[0].priceValue/100}>{this.props.data.Offers[0].OfferPrice[0].formattedPriceValue}</strong> <span id="price-qualifier">{this.props.data.Offers[0].OfferPrice[0].priceQualifier}</span>
					{(this.props.data.hasOwnProperty('Promotions') && this.props.data.Promotions.length > 0) ? <div id="promotions">{this.props.data.Promotions.map((promotion, i) => <Promotion key={i} text={promotion.Description[0].shortDescription} />)}</div> : null}
					<form id="buy-form" name="buy-form">
						<PlusMinus name="quantity" />
						{
							(this.props.data.purchasingChannelCode === '0' || this.props.data.purchasingChannelCode === '2') ?
								<div id="pick-up-in-store-container">
									<button id="pick-up-in-store" className="buy-button" name="pick-up-in-store" aria-label="Pick up in store"></button>
									<a id="find-in-a-store" href="#" title="Find in a store">find in a store</a>
								</div> : null
						}
						{
							(this.props.data.purchasingChannelCode === '0' || this.props.data.purchasingChannelCode === '1') ?
								<div id="add-to-cart-container">
									<button id="add-to-cart" className="buy-button" name="add-to-cart" aria-label="Add to cart"></button>
								</div> : null
						}
					</form>
					<div id="returns-container">
						<div id="returns">returns</div>
						<div id="return-info">
							<p>This item must be returned within 30 days of the ship date. See return policy for details.</p>
							<p>Prices, promotions, styles and availability may vary by store and online.</p>
						</div>
					</div>
					<div id="buttons-container">
						<button id="add-to-registry" name="add-to-registry">Add to registry</button>
						<button id="add-to-list" name="add-to-list">Add to list</button>
						<button id="share" name="share">Share</button>
					</div>
					<div id="product-highlights-container">
						<h2 id="product-highlights-title">product highlights</h2>
						<ul id="product-highlights" itemProp="description">
							{this.props.data.ItemDescription[0].features.map((feature, i) => <li key={i}>{striptags(feature)}</li>)}
						</ul>
					</div>
				</div>
				<div id="review-module-container" className="mobile-centered">
					<Reviews data={this.props.data.CustomerReview[0]} />
				</div>
			</div>
		);
	}
}

export default App;
