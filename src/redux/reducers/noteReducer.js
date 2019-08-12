export default function noteReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_NOTE':
      console.log('note created!');
      return [...state, { ...action.note }];
    case 'CREATE_NOTE_ERROR':
      console.log('create note error', action.err);
      return state;
    default:
      return state;
  }
}
