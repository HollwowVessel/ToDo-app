import { configureStore } from '@reduxjs/toolkit';

import addSlice from './slices/addSlice';
import folderSlice from './slices/folderSlice';

export const store = configureStore({
	reducer: { changePopup: addSlice, changeFolder: folderSlice },
});
