import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { logOut } from '../redux/actions/authActions';

function User(props) {
  return (
    <div className="user">
      <a className="dropdown-trigger" data-target="dropdown1">
        <i className="large material-icons">person</i>
      </a>
      <ul id="dropdown1" className="dropdown-content">
        <ul className="container-user">
          <div className="user-data">
            <li>Nombre Apellido</li>
            <i className="large material-icons dark">person</i>
          </div>
          <button
            className="btn pink waves-effect waves-light button-logout"
            onClick={props.logOut}
          >
            Log out
          </button>
        </ul>
      </ul>
    </div>
  );
}

User.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
