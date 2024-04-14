// src/features/auth/authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Définition du type pour l'état du slice auth
interface AuthState {
  email: string;
  token: string;
  userFirstname: string;
  isLoggedIn: boolean;
}

// Type pour les données de l'action setCredentials
interface Credentials {
  email: string;
  token: string;
  userFirstname: string;
}

// État initial typé
const initialState: AuthState = {
  email: "",
  token: "",
  userFirstname: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Credentials>) => {
      const { email, userFirstname, token } = action.payload;
      state.email = email;
      state.userFirstname = userFirstname;
      state.token = token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = "";
      state.userFirstname = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
