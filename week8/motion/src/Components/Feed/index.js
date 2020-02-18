import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GetFeedAction } from '../../Store/Action';
import CreatePost from '../Create Post';
import LogoutUser from '../Logout';

class Feed extends React.Component {
	componentDidMount() {
		if (this.props.token) {
			this.props.dispatch(GetFeedAction(this.props.token));
		}
	}

	render() {
		console.log('in the feed');
		console.log(this.props);
		return (
			<>
				THE FEEDS
				{this.props.feed.map((feed, index) => {
					return (
						<li key={index}>
							<p>{feed.user.email}</p>
							{feed.content}
						</li>
					);
				})}
				<CreatePost />
				<LogoutUser />
				<Link to={`/users/1`}>
					<h1>User Profile</h1>
				</Link>
			</>
		);
	}
}
const mapStateToProps = (state, props) => {
	console.log('in the mapStatToProps FEED');
	console.log(state);
	return {
		token: state.token,
		feed: state.feed
	};
};

export default connect(mapStateToProps)(Feed);
