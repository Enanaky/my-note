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
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        created: new Date(),
        lastUpdate: new Date()
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
