import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CongratsPage = props => {
	console.log('props ', props);
	return (
		<>
			<h1>CONGRATLATIONS!</h1>
			<p>We've sent a confirmation code to your email</p>
			<p>{props.signUpEmail}</p>
			<button>
				<Link to='/signUp/message/verification/'>Continue</Link>
			</button>
		</>
	);
};

const mapStateToProps = (state, props) => {
	return {
		signUpEmail: state.signUpEmail
	};
};
export default connect(mapStateToProps)(CongratsPage);
