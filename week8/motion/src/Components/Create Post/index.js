import React, { useState } from 'react';
import { connect } from 'react-redux';

const CreatePost = props => {
	const [text, setText] = useState('');

	const textChangeHandler = event => {
		setText(event.currentTarget.value);
	};

	const onClickPostHandler = async event => {
		event.preventDefault();
		console.log('POST CLICKED');

		const url = 'http://localhost:8000/backend/api/social/posts/';
		const body = {
			content: text
		};
		const headers = new Headers({
			Authorization: `Bearer ${props.token}`,
			'Content-type': 'application/json'
		});
		const method = 'POST';

		fetch(url, { method, body: JSON.stringify(body), headers })
			.then(response => response.json())
			.then(content => {
				console.log(content);
				setText({
					content
				});
			});
	};

	console.log(text);
	return (
		<>
			<h1>CREATE POST HERE</h1>
			<form onSubmit={onClickPostHandler}>
				<input
					type='text'
					placeholder='Post here'
					value={setText.text}
					onChange={textChangeHandler}
				/>
				<button type='submit'>POST</button>
			</form>
		</>
	);
};

const mapStateToProps = (state, props) => {
	console.log('in the mapStateToProps in POST');
	console.log(state);
	return {
		token: state.token,
		feed: state.feed
	};
};

export default connect(mapStateToProps)(CreatePost);
