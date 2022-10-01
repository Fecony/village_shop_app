import { createSlice } from '@reduxjs/toolkit';

export enum NotificationType {
  WARNING = 'warning',
  DANGER = 'danger',
  SUCCESS = 'success',
}

export interface Notification {
  message: string;
  type: NotificationType;
}

export interface UiState {
  isAdminMode: boolean;
  age: number | null;
  notification: null | Notification;
}

const initialState: UiState = {
  isAdminMode: false,
  age: null,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleAdminPage: (state) => {
      state.isAdminMode = !state.isAdminMode;
    },
    setAge: (state, action) => {
      state.age = Number(action.payload);
      state.isAdminMode = false;
    },
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const { toggleAdminPage, setAge, showNotification, hideNotification } =
  uiSlice.actions;

export default uiSlice.reducer;
