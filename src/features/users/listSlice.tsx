import { createSlice } from "@reduxjs/toolkit";
const initialState: any[] = [];

const listSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    viewList: (state, action: { payload: [] }) => {
      action.payload.forEach((i: any) => {
        state.push(i);
      });
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    }
  }
});

export const { viewList } = listSlice.actions;
export default listSlice.reducer;
