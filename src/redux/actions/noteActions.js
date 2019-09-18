export function createNote(note) {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection('notes')
      .add({
        ...note,
        authorFirstName: profile.firstName ? profile.firstName : null,
        authorLastName: profile.lastName ? profile.lastName : null,
        authorName: profile.name ? profile.name : null,
        authorId: authorId,
        created: new Date(),
        lastUpdate: new Date(),
        color: '#ffffff',
        label: 'None'
      })
      .then(() => {
        dispatch({ type: 'CREATE_NOTE', note });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_NOTE_ERROR', err });
      });
  };
}

export function deleteNote(id) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('notes')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_NOTE', id });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_NOTE_ERROR', err });
      });
  };
}
export function updateNote(id, changes) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('notes')
      .doc(id)
      .update({
        title: changes.title,
        content: changes.content,
        lastUpdate: new Date()
      })
      .then(() => {
        dispatch({ type: 'UPDATE_NOTE', id });
      })
      .catch(err => {
        dispatch({ type: 'UPDATE_NOTE_ERROR', err });
      });
  };
}
export function updateColor(id, color) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('notes')
      .doc(id)
      .update({
        color: color,
        lastUpdate: new Date()
      })
      .then(() => {
        dispatch({ type: 'CHANGE_COLOR', id });
      })
      .catch(err => {
        dispatch({ type: 'CHANGE_COLOR_ERROR', err });
      });
  };
}
export function updateLabel(id, label) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('notes')
      .doc(id)
      .update({
        label: label,
        lastUpdate: new Date()
      })
      .then(() => {
        dispatch({ type: 'CHANGE_LABEL', id });
      })
      .catch(err => {
        dispatch({ type: 'CHANGE_LABEL_ERROR', err });
      });
  };
}
