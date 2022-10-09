import { createSlice } from "@reduxjs/toolkit";
const initialState: any[] = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state: any[], action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    },
    updateUser: (state, action: { payload: [] }) => {
      action.payload.forEach((i: any) => {
        state.push(i);
      });
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    },
    editUser: (state, action) => {
      const { id, image, name, role, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.image = image;
        existingUser.name = name;
        existingUser.role = role;
        existingUser.email = email;
      }
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        var update = state.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(update));
        return update;
      }
    }
  }
});

export const { addUser, editUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
