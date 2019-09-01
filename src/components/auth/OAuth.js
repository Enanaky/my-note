import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

import { signUpOAuth } from '../../redux/actions/authActions';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function OAuth(props) {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: profile => {
        const { uid, displayName, email, photoURL } = profile.user;
        props.signIn(uid, displayName, email, photoURL);
      }
    }
  };

  return (
    <div className="login-with">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

OAuth.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  // console.log(state);

  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (uid, name, email, photoURL) => dispatch(signUpOAuth(uid, name, email, photoURL))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuth);
