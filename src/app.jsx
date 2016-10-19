import React from 'react';
import striptags from 'striptags';

class App extends React.Component {
  render() {
  	console.log(this.props.data);
    return (
    	<div id="viewport" itemScope itemType="http://schema.org/Product">
			<div id="image-container" className="mobile-centered">
				<h1 id="product-title" itemProp="name">{this.props.data.title}</h1>
				<div id="primary-image-container">
					<img id="primary-image" alt="Ninja" itemProp="image" src={this.props.data.Images[0].PrimaryImage[0].image} />
				</div>
				<div id="slider-container">
					<img className="slide" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt01" />
					<img className="slide active" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt02" />
					<img className="slide" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt03" />
					<img className="slide" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt04" />
					<img className="slide" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt05" />
					<img className="slide" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt06" />
					<img className="slide" alt="Alternate product image" src="http://target.scene7.com/is/image/Target/14263758_Alt07" />
				</div>
			</div>
			<div id="info-container" className="mobile-centered">
				<meta itemProp="priceCurrency" content={this.props.data.Offers[0].OfferPrice[0].currencyCode} />
				<strong id="price" itemProp="price" content={this.props.data.Offers[0].OfferPrice[0].priceValue/100}>{this.props.data.Offers[0].OfferPrice[0].formattedPriceValue}</strong> <span id="price-qualifier">{this.props.data.Offers[0].OfferPrice[0].priceQualifier}</span>
				<div id="promotions">
					<div className="promotion">spend $50, ship free</div>
					<div className="promotion">$25 gift card with purchase of a select Ninja blender</div>
				</div>
				<form id="buy-form" name="buy-form">
					<div id="quantity-container">
						<span id="quantity-label">quantity:</span>
						<div id="quantity-control">
							<div id="minus-button"></div>
							<div id="quantity">1</div>
							<div id="plus-button"></div>
						</div>
						<input id="quantity-input" name="quantity-input" min="0" step="1" type="number" value="1" />
					</div>
					<div id="pick-up-in-store-container">
						<button id="pick-up-in-store" className="buy-button" name="pick-up-in-store" aria-label="Pick up in store"></button>
						<a id="find-in-a-store" href="#" title="Find in a store">find in a store</a>
					</div>
					<div id="add-to-cart-container">
						<button id="add-to-cart" className="buy-button" name="add-to-cart" aria-label="Add to cart"></button>
					</div>
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
				<div id="overall-rating-container">
					<div className="star red"></div>
					<div className="star red"></div>
					<div className="star red"></div>
					<div className="star red"></div>
					<div className="star red"></div>
					<div id="overall-rating-metadata" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
						<meta itemProp="ratingValue" content="4" />
						<meta itemProp="reviewCount" content="14" />
					</div>
				</div>
				<div id="rating-header">
					<strong id="overall">overall</strong>
					<a id="view-all" href="#" title="View all ratings">view all 14 reviews</a>
				</div>
				<div id="most-helpful-container">
					<div id="pro-container">
						<div className="review-category-header-container">
							<h3 className="review-category-header">pro</h3>
							<span className="review-category-description">most helpful 4-5 star review</span>
						</div>
						<div className="review-body" itemProp="review" itemScope itemType="http://schema.org/Review">
							<div className="star red"></div>
							<div className="star red"></div>
							<div className="star red"></div>
							<div className="star red"></div>
							<div className="star red"></div>
							<div className="review-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
								<meta itemProp="worstRating" content="1" />
								<meta itemProp="bestRating" content="5" />
								<meta itemProp="ratingValue" content="5" />
							</div>
							<strong className="review-title" itemProp="name">Fantastic Blender</strong>
							<p className="review-text" itemProp="description">This blender works amazingly, and blends within seconds. The single serve cups also work really well for smoothies or protein shakes!</p>
							<a className="review-name" href="#" itemProp="author" title="Read all reviews by this author">Eric</a> <time className="review-time" dateTime="2013-04-18T00:00" itemProp="datePublished">April 18, 2013</time>
						</div>
					</div>
					<div id="con-container">
						<div className="review-category-header-container">
							<h3 className="review-category-header">con</h3>
							<span className="review-category-description">most helpful 1-2 star review</span>
						</div>
						<div className="review-body" itemProp="review" itemScope itemType="http://schema.org/Review">
							<span className="star red"></span>
							<span className="star gray"></span>
							<span className="star gray"></span>
							<span className="star gray"></span>
							<span className="star gray"></span>
							<div className="review-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
								<meta itemProp="worstRating" content="1" />
								<meta itemProp="bestRating" content="5" />
								<meta itemProp="ratingValue" content="1" />
							</div>
							<strong className="review-title" itemProp="name">Very unhappy</strong>
							<p className="review-text" itemProp="description">Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup.</p>
							<a className="review-name" href="#" itemProp="author" title="Read all reviews by this author">New York</a> <time className="review-time" dateTime="2013-03-11T00:00" itemProp="datePublished">March 11, 2013</time>
						</div>
					</div>
					<div className="clear"></div>
				</div>
				<div id="reviews-container">
					<div id="review-container">
						
					</div>
				</div>
			</div>
		</div>
    );
  }
}

module.exports = App;