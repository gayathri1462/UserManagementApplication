import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
export const UPDATE_USERS = "UPDATE_USERS";
export const ADD_USER = "ADD_USER";
export const EDIT_USER_BY_ID = "EDIT_USER_BY_ID";
export const DELETE_USER_BY_ID = "DELETE_USER_BY_ID";
export const VIEW_LIST = "VIEW_LIST";

export interface ButtonProps {
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  className?: string;
}
export interface InputProps {
  disabled?: any;
  accept?: string;
  className?: string;
  label: string;
  inputProps: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type User = {
  id?: any;
  image?: any;
  name: string;
  role: string;
  email?: string;
};

/*export type UserStore = {
  users: {}[];
};*/
