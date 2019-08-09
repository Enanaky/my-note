const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('error');
      return {
        ...state,
        authError: 'Login failed'
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      };
    case 'LOGOUT_SUCCESS':
      console.log('Log out success');
      return {
        ...state,
        isLogedIn: false
      };

    default:
      return state;
  }
};

export default authReducer;
