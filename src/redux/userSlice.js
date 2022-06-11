import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signin: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    signOut: (state, action) => {
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const { signin, signOut } = userSlice.actions;

export default userSlice.reducer;