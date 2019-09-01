export default function noteReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_NOTE':
      return [...state, { ...action.note }];
    case 'CREATE_NOTE_ERROR':
      return state;
    case 'DELETE_NOTE':
      // eslint-disable-next-line no-case-declarations
      const newState = state.filter(note => note.id !== action.id);
      return newState;
    case 'DELETE_NOTE_ERROR':
      return state;
    default:
      return state;
  }
}
