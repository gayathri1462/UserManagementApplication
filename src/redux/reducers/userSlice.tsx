import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  skills: string[];
}

const initialState: User[] = [];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return [...state, action.payload];
    },
    updateUser: (state, action: PayloadAction<User[]>) => {
      // action.payload.forEach((i: any) => {
      //   state.push(i);
      // });
      // return state;
      return [...state, ...action.payload];
    },
    editUser: (state, action: PayloadAction<User>) => {
      const { id, image, name, email, skills } = action.payload;
      return state.map((user) =>
        user.id === id ? { ...user, image, name, email, skills } : user
      );
    },
    deleteUser: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
    },
    clearList: () => {
      return initialState;
    }
  }
});

export const {
  addUser,
  editUser,
  updateUser,
  deleteUser,
  clearList
} = userSlice.actions;
export default userSlice.reducer;
