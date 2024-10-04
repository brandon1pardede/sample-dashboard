import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  excludeKeywords: string[];
  triggerKeywords: string[];
  newExcludeKeyword: string;
  newTriggerKeyword: string;
  showEmojis: boolean;
  selectedReactions: string[];
  enablePrivateReply: boolean;
  sendMessagePerUserOncePerPost: boolean;
  messageType: string | null;
  flow: string | null;
  message: string | null;
}

const initialState: SettingsState = {
  excludeKeywords: [],
  triggerKeywords: [],
  newExcludeKeyword: "",
  newTriggerKeyword: "",
  showEmojis: false,
  selectedReactions: [],
  enablePrivateReply: false,
  sendMessagePerUserOncePerPost: false,
  messageType: null,
  flow: null,
  message: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addExcludeKeyword: (state) => {
      state.excludeKeywords.push(state.newExcludeKeyword);
      state.newExcludeKeyword = "";
    },
    removeExcludeKeyword: (state, action: PayloadAction<number>) => {
      state.excludeKeywords.splice(action.payload, 1);
    },
    addTriggerKeyword: (state) => {
      state.triggerKeywords.push(state.newTriggerKeyword);
      state.newTriggerKeyword = "";
    },
    removeTriggerKeyword: (state, action: PayloadAction<number>) => {
      state.triggerKeywords.splice(action.payload, 1);
    },
    setNewExcludeKeyword: (state, action: PayloadAction<string>) => {
      state.newExcludeKeyword = action.payload;
    },
    setNewTriggerKeyword: (state, action: PayloadAction<string>) => {
      state.newTriggerKeyword = action.payload;
    },
    setShowEmojis: (state, action: PayloadAction<boolean>) => {
      state.showEmojis = action.payload;
    },
    addReaction: (state, action: PayloadAction<string>) => {
      if (!state.selectedReactions.includes(action.payload)) {
        state.selectedReactions.push(action.payload);
      }
    },
    removeReaction: (state, action: PayloadAction<string>) => {
      state.selectedReactions = state.selectedReactions.filter(
        (reaction) => reaction !== action.payload
      );
    },
    setEnablePrivateReply: (state, action: PayloadAction<boolean>) => {
      state.enablePrivateReply = action.payload;
    },
    setSendMessagePerUserOnce: (state, action: PayloadAction<boolean>) => {
      state.sendMessagePerUserOncePerPost = action.payload;
    },
    setMessageType: (state, action: PayloadAction<string>) => {
      state.messageType = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setFlow: (state, action: PayloadAction<string>) => {
      state.flow = action.payload;
    },
  },
});

export const {
  addExcludeKeyword,
  removeExcludeKeyword,
  addTriggerKeyword,
  removeTriggerKeyword,
  setNewExcludeKeyword,
  setNewTriggerKeyword,
  setShowEmojis,
  addReaction,
  removeReaction,
  setEnablePrivateReply,
  setSendMessagePerUserOnce,
  setMessage,
  setMessageType,
  setFlow,
} = settingsSlice.actions;

export default settingsSlice.reducer;
