import React from 'react';
import Stars from './stars.jsx';
import Review from './review.jsx';

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {reviewsVisible: false};
		this.showAllReviews = this.showAllReviews.bind(this);
	}

	showAllReviews() {
		this.setState({reviewsVisible: true});
	}

	render() {
		return (
			<div className="reviews-container">
				<div className="overall-stars">
					<Stars value={5} outOf={5} size={25} />
					<div className="hidden" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
						<meta itemProp="ratingValue" content={this.props.data.consolidatedOverallRating} />
						<meta itemProp="reviewCount" content={this.props.data.totalReviews} />
					</div>
				</div>
				<div className="overall-text-container">
					<strong className="overall-text">overall</strong>
					{!this.state.reviewsVisible ? <a className="view-all" href="#all-reviews" onClick={this.showAllReviews} title="View all ratings">view all {this.props.data.Reviews.length} reviews</a> : null}
				</div>
				<div className="most-helpful-container">
					<div className="review-container">
						<div className="title-container">
							<h3 className="header-title">pro</h3>
							<span>most helpful 4-5 star review</span>
						</div>
						<Review data={this.props.data.Pro[0]} />
					</div>
					<div className="review-container">
						<div className="title-container">
							<h3 className="header-title">con</h3>
							<span>most helpful 1-2 star review</span>
						</div>
						<Review data={this.props.data.Con[0]} />
					</div>
					<div className="clear"></div>
					{this.state.reviewsVisible ? <a name="all-reviews" className="all-reviews-container">{this.props.data.Reviews.map((review, i) => <Review key={i} data={review} />)}</a> : null}
				</div>
			</div>
		);
	}
}

Reviews.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Reviews;
