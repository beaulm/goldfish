import React from 'react';
import Stars from './stars.jsx';

class Review extends React.Component {
	render() {
		let reviewDate = new Date(this.props.data.datePosted);
		return (
			<div className="review" key={this.props.data.reviewKey} itemProp="review" itemScope itemType="http://schema.org/Review">
				<Stars value={this.props.data.overallRating} outOf={5} size={15} />
				<div className="hidden" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
					<meta itemProp="worstRating" content="1" />
					<meta itemProp="bestRating" content="5" />
					<meta itemProp="ratingValue" content={this.props.data.overallRating} />
				</div>
				<strong className="title" itemProp="name">{this.props.data.title}</strong>
				<p className="copy" itemProp="description">{this.props.data.review}</p>
				<a className="author-link" href="#" itemProp="author" title={'Read all reviews by '+this.props.data.screenName}>{this.props.data.screenName}</a> <time dateTime={reviewDate.toISOString()} itemProp="datePublished">{reviewDate.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</time>
			</div>
		);
	}
}

Review.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Review;
