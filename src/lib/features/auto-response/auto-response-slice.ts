// autoResponseSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AutoResponseState {
  commentType: string;
  staticComments: string[];
  newComment: string;
  enableAutoLikeComments: boolean;
}

const initialState: AutoResponseState = {
  commentType: "static",
  staticComments: ["a1", "a2"],
  newComment: "",
  enableAutoLikeComments: false,
};

const autoResponseSlice = createSlice({
  name: "autoResponse",
  initialState,
  reducers: {
    setCommentType: (state, action: PayloadAction<string>) => {
      state.commentType = action.payload;
    },
    setNewComment: (state, action: PayloadAction<string>) => {
      state.newComment = action.payload;
    },
    addStaticComment: (state) => {
      state.staticComments.push("");
    },
    removeStaticComment: (state, action: PayloadAction<number>) => {
      state.staticComments = state.staticComments.filter(
        (_, i) => i !== action.payload
      );
    },
    resetNewComment: (state) => {
      state.newComment = "";
    },
    editStaticComment: (
      state,
      action: PayloadAction<{ index: number; newComment: string }>
    ) => {
      const { index, newComment } = action.payload;
      state.staticComments[index] = newComment;
    },
    setEnableAutoLikeComments: (state, action: PayloadAction<boolean>) => {
      state.enableAutoLikeComments = action.payload;
    },
  },
});

export const {
  setCommentType,
  setNewComment,
  addStaticComment,
  removeStaticComment,
  resetNewComment,
  editStaticComment,
  setEnableAutoLikeComments,
} = autoResponseSlice.actions;

export default autoResponseSlice.reducer;
