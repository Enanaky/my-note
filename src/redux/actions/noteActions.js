export function createNote(note) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .add({
        ...note,
        authorFirstName: 'Juan',
        authorLastName: 'Petrone',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_NOTE', note });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_NOTE_ERROR', err });
      });
  };
}
