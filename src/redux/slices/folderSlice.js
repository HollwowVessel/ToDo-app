import { createSlice, current } from '@reduxjs/toolkit';
import { folderMock } from '../../Mocks/Folder';

const initialState = {
	folders: folderMock,
	currentFolder: [],
};

const taskSlice = createSlice({
	name: 'taskSlice',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.currentFolder[0].tasks.push(action.payload);
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder[0].id),
				state.currentFolder[0],
			].sort((a, b) => a.id - b.id);
		},
		delTask: (state, action) => {
			state.currentFolder = state.currentFolder.tasks.filter((obj) => obj.id !== action.payload);
		},
		clearTask: (state) => {
			state.currentFolder = [];
		},
		changeTask: (state, action) => {},
		setActiveFolder: (state, action) => {
			console.log(state.currentFolder);
			state.currentFolder = [state.folders[action.payload]];
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder[0].id),
				state.currentFolder[0],
			].sort((a, b) => a.id - b.id);
		},
		addFolder: (state, action) => {
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder[0].id),
				action.payload,
			].sort((a, b) => a.id - b.id);
		},
		delFolder: (state) => {},
		editFolder: (state, action) => {},
	},
});

export const {
	addTask,
	delTask,
	clearTask,
	changeTask,
	setActiveFolder,
	addFolder,
	delFolder,
	editFolder,
} = taskSlice.actions;
export default taskSlice.reducer;
