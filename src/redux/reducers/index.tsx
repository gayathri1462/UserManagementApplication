import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import listsReducer from "./listSlice";

export const rootReducer = combineReducers({
  users: usersReducer,
  userlist: listsReducer
});
