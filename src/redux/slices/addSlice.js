import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	popupOpen: false,
	newTask: false,
};

const addSlice = createSlice({
	name: 'addSlice',
	initialState,
	reducers: {
		changePopup: (state) => {
			state.popupOpen = !state.popupOpen;
		},
		changeTask: (state) => {
			state.newTask = !state.newTask;
		},
	},
});

export const { changePopup, changeTask } = addSlice.actions;
export default addSlice.reducer;
