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
      state.push(action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const { id, image, name, email, skills } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], image, name, email, skills };
      }
    },
    deleteUser: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.splice(userIndex, 1);
      }
    },
    clearList: (state: User[]) => {
      state.splice(0, state.length);
    }
  }
});

export const { addUser, editUser, deleteUser, clearList } = userSlice.actions;
export default userSlice.reducer;
