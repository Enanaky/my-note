import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { signIn } from '../../redux/actions/authActions';

function SignIn(props) {
  const { authError, auth } = props;
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.signIn(userInput);
  }
  return (
    <div className="container">
      {!auth.isEmpty ? <Redirect to="/dashboard" /> : null}
      <form className="white signIn-form" id="form" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3 center">Login</h5>
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
          <Link to="/signUp" className="btn pink waves-effect">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  authError: PropTypes.string,
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  console.log(state);

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
