import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  avatar: string;
  displayName: string;
};

type Organization = {
  id: number;
  avatar: string;
  displayName: string;
  link: string;
};

interface AuthState {
  user: User;
  org: Organization;
}

const initialState: AuthState = {
  user: {
    id: 1,
    displayName: "Brandon Pardede",
    avatar:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  org: {
    id: 1,
    displayName: "Proto Inc",
    avatar:
      "https://plus.unsplash.com/premium_photo-1680859126120-54a4df3536d3?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://google.com",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
