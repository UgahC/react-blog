import { configureStore, createSlice } from "@reduxjs/toolkit";
let isLoggedIn = false;

if (localStorage.getItem("userId")) isLoggedIn = true;

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
