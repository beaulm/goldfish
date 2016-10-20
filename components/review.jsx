import React from 'react';
import Stars from './stars.jsx';

class Review extends React.Component {
	render() {
		let reviewDate = new Date(this.props.data.datePosted);
		return (
			<div key={this.props.data.reviewKey} itemProp="review" itemScope itemType="http://schema.org/Review" style={{paddingTop: 17}}>
				<Stars value={this.props.data.overallRating} outOf={5} size={15} />
				<div itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" style={{display: 'none'}}>
					<meta itemProp="worstRating" content="1" />
					<meta itemProp="bestRating" content="5" />
					<meta itemProp="ratingValue" content={this.props.data.overallRating} />
				</div>
				<strong itemProp="name" style={{clear: 'both', color: '#000', display: 'block', fontSize: 17, paddingTop: 3}}>{this.props.data.title}</strong>
				<p itemProp="description" style={{lineHeight: 1.3, marginBottom: 11, marginTop: 2}}>{this.props.data.review}</p>
				<a href="#" itemProp="author" title={'Read all reviews by '+this.props.data.screenName} style={{textDecoration: 'none'}}>{this.props.data.screenName}</a> <time dateTime={reviewDate.toISOString()} itemProp="datePublished">{reviewDate.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</time>
			</div>
		);
	}
}

export default Review;
