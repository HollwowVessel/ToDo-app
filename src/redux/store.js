import { configureStore } from '@reduxjs/toolkit';
import activeSlice from './slices/activeSlice';
import addSlice from './slices/addSlice';

export const store = configureStore({
	reducer: { changePopup: addSlice, setActive: activeSlice },
});
