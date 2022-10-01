import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsApi } from '../features/product/productsApi';
import uiSlice from '../features/ui/uiSlice';
import { saveState, loadState } from './localStorage';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.subscribe(() => {
  saveState({
    ui: store.getState().ui,
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
