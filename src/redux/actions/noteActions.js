export function createNote(note) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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
