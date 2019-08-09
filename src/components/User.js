import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { logOutAction } from '../redux/actions/authActions';

function User(props) {
  useEffect(() => {
    let dropdown = document.querySelector('.dropdown-trigger');
    // eslint-disable-next-line no-undef
    M.Dropdown.init(dropdown, { hover: false, alignment: 'left' });
  }, []);

  if (!props.auth.uid) return <Redirect to="/" />;
  return (
    <div className="user">
      <a className="dropdown-trigger" data-target="dropdown1" onClick={() => console.log('user')}>
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
        a
      </ul>
    </div>
  );
}

User.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOutAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

{
  /* <div className="user">
      <i className="large material-icons">person</i>
      <button className="btn pink waves-effect waves-light button-logout" onClick={props.logOut}>
        Log out
      </button>
    </div> */
}
