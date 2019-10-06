import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import OAuth from './OAuth';

import { signIn } from '../../redux/actions/authActions';

function SignIn(props) {
  const { authError, signIn, auth } = props;
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    signIn(userInput);
  }

  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <div className="container">
      <form className="white signIn-form" id="form" onSubmit={handleSubmit}>
        {/* <h5 className="grey-text text-darken-3 center">Login</h5> */}
        <img className="logo" src="./media/logo.png" alt="logo" />
        <div className="row input-container email">
          <i className="small material-icons col 2">mail</i>
          <div className="input-field email col s11">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} className="validate" required />
          </div>
        </div>
        <div className=" row input-container password">
          <i className="small material-icons col 2">fingerprint</i>
          <div className="input-field password col s11">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="validate"
              required
            />
          </div>
        </div>
        <div className="red-text center">{authError ? <p>{authError}</p> : null}</div>
        <div className="input-field login-buttons">
          <button type="submit" className="btn pink waves-effect">
            Login
          </button>
          <div
            style={{
              display: 'flex',
              width: '220px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <p>Don&apos;t have an Account? </p>
            <Link to="/signUp"> Sign Up</Link>
          </div>
        </div>
        <OAuth />
        <div className="tecs">
          <img className="tec" src="./media/react-logo.png" alt="react" />
          <img className="tec" src="./media/redux-logo.png" alt="redux" />
          <img className="tec" src="./media/firebase-logo.png" alt="firebase" />
        </div>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  authError: PropTypes.string,
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  // console.log(state);

  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
