import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const carteUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.currentUser = action.payload;
    },
    userLogout: (state, action) => {
      state.currentUser = null;
    },
  },
});

export const { userLogin, userLogout } =  carteUser.actions
export default carteUser.reducer
