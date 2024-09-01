import { createSlice } from "@reduxjs/toolkit";

const skillRoute = createSlice({
  name: "skillRoutes",
  initialState: {
    skill: null,
  },
  reducers: {
    skillAct: (state, action) => {
      console.log("Action payload:", action.payload);
      state.skill = action.payload.skak;
      console.log("Updated state.skill:", state.skill);
    },
  },
});

export const { skillAct } = skillRoute.actions;
export default skillRoute.reducer;
