export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};
export const logOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.logout().then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
    });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            initials: newUser.first_name[0] + newUser.last_name[0],
            gender: newUser.gender
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  };
};
export const signUpOAuth = (uid, name, email, image) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('users')
      .doc(uid)
      .set({
        name: name ? name : null,
        email: email ? email : null,
        image: image ? image : null
      })

      .catch(err => console.log(err));
    // dispatch({ type: 'SIGNUP_ERROR', err });
  };
};
