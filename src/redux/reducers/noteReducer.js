// import { initialState } from "./initialState";

export default function noteReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_NOTE":
      return [...state, { ...action.note }];
    default:
      return state;
  }
}
