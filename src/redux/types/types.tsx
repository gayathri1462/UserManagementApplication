// Custom Hooks with Types
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";

// Action Types
export const UPDATE_USERS = "UPDATE_USERS";
export const ADD_USER = "ADD_USER";
export const EDIT_USER_BY_ID = "EDIT_USER_BY_ID";
export const DELETE_USER_BY_ID = "DELETE_USER_BY_ID";
export const VIEW_LIST = "VIEW_LIST";
export const CLEAR_LIST = "CLEAR_LIST";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
