import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeColor: 0,
	activeFolder: 0,
};

const activeSlice = createSlice({
	name: 'activeSlice',
	initialState,
	reducers: {
		changeActiveColor: (state, action) => {
			console.log(action.payload);
			state.activeColor = action.payload;
		},
		changeActiveFolder: (state, action) => {
			state.activeFolder = action.payload;
		},
	},
});

export const { changeActiveFolder, changeActiveColor } = activeSlice.actions;
export default activeSlice.reducer;
