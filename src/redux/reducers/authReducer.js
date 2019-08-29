const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.err.message
      };
    case 'LOGIN_SUCCESS':
      console.log('Log-in success');
      return {
        ...state,
        authError: null
      };
    case 'LOGOUT_SUCCESS':
      console.log('Log-out success');
      return {
        ...state,
        isLogedIn: false
      };
    case 'SIGNUP_SUCCESS':
      console.log('Signup success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
