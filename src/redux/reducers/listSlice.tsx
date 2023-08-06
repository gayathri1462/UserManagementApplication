//Only for reference of using multiple reducers
import { createSlice } from "@reduxjs/toolkit";
const initialState: any[] = [];

const listSlice = createSlice({
  name: "userlist",
  initialState,
  reducers: {
    viewList: (state, action: { payload: [] }) => {
      action.payload.forEach((i: any) => {
        state.push(i);
      });
    }
  }
});

export const { viewList } = listSlice.actions;
export default listSlice.reducer;
