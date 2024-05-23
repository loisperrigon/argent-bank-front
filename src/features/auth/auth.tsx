// src/features/auth/authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Définition du type pour l'état du slice auth
interface AuthState {
  email: string;
  token: string;
  userFirstName: string;
  userLastName: string;
  isLoggedIn: boolean;
}

// Type pour les données de l'action setCredentials
interface Credentials {
  email: string;
  token: string;
  userLastName: string;
  userFirstName: string;
}

// État initial typé
const initialState: AuthState = {
  email: "",
  token: "",
  userFirstName: "",
  userLastName: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Credentials>) => {
      const { email, userFirstName, userLastName, token } = action.payload;
      state.email = email;
      state.userFirstName = userFirstName;
      state.userLastName = userLastName;
      state.token = token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = "";
      state.userFirstName = "";
      state.userLastName = "";
      state.token = "";
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      const { userFirstName, userLastName } = action.payload;
      state.userFirstName = userFirstName;
      state.userLastName = userLastName;
    },
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
