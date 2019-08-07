export function createNote(note) {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'CREATE_NOTE', note });
  };
}
