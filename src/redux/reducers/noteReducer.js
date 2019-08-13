export default function noteReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_NOTE':
      console.log('note created!');
      return [...state, { ...action.note }];
    case 'CREATE_NOTE_ERROR':
      console.log('create note error', action.err);
      return state;
    case 'DELETE_NOTE':
      console.log('note deleted!');
      // eslint-disable-next-line no-case-declarations
      const newState = state.filter(note => note.id !== action.id);
      console.log(newState);
      return newState;
    case 'DELETE_NOTE_ERROR':
      console.log('delete note error', action.err);
      return state;
    default:
      return state;
  }
}
