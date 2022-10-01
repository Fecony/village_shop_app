import { UiState } from '../features/ui/uiSlice';

const UI_STATE: string = 'uiState';

export const loadState = () => {
  try {
    const serialState = localStorage.getItem(UI_STATE);

    if (serialState === null) {
      return undefined;
    }

    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: { ui: UiState }) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem(UI_STATE, serialState);
  } catch (err) {
    console.log(err);
  }
};
