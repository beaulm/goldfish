import React from 'react';
import Stars from './stars.jsx';
import Review from './review.jsx';

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {reviewsVisible: false};
	}

	render() {
		return (
			<div>
				<div style={{paddingLeft: 18}}>
					<Stars value={5} outOf={5} size={25} />
					<div itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating" style={{display: 'none'}}>
						<meta itemProp="ratingValue" content={this.props.data.consolidatedOverallRating} />
						<meta itemProp="reviewCount" content={this.props.data.totalReviews} />
					</div>
				</div>
				<div style={{paddingTop: 11}}>
					<strong style={{color: '#000', fontWeight: 'bold', paddingLeft: 8}}>overall</strong>
					<a href="#" title="View all ratings" style={{color: '#000', float: 'right', fontWeight: 'bold', marginRight: 17, textDecoration: 'none'}}>view all 14 reviews</a>
				</div>
				<div style={{backgroundColor: '#F6F5F5', borderRadius: 2, marginTop: 19, padding: '15px 16px 18px 20px'}}>
					<div style={{float: 'left', width: 226}}>
						<div style={{borderBottom: '1px solid #CCC', marginBottom: 17, paddingBottom: 16}}>
							<h3 style={{color: '#000', fontWeight: 'normal', margin: 0, textTransform: 'uppercase'}}>pro</h3>
							<span>most helpful 4-5 star review</span>
						</div>
						<Review data={this.props.data.Pro[0]} />
					</div>
					<div style={{float: 'left', width: 226}}>
						<div style={{borderBottom: '1px solid #CCC', marginBottom: 17, paddingBottom: 16}}>
							<h3 style={{color: '#000', fontWeight: 'normal', margin: 0, textTransform: 'uppercase'}}>con</h3>
							<span>most helpful 1-2 star review</span>
						</div>
						<Review data={this.props.data.Con[0]} />
					</div>
					<div className="clear"></div>
				</div>
				<div id="reviews-container">
					<div id="review-container">
						
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Reviews;