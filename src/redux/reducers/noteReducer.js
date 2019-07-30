// import { initialState } from "./initialState";

export default function noteReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_NOTE":
      debugger;
      return [...state, { ...action.note }];
    default:
      return state;
  }
}
