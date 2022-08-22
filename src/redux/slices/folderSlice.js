import { createSlice, current } from '@reduxjs/toolkit';
import { folderMock } from '../../Mocks/Folder';

const initialState = {
	folders: folderMock,
	currentFolder: folderMock[0],
};

const taskSlice = createSlice({
	name: 'taskSlice',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.currentFolder.tasks.push(action.payload);
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder.id),
				state.currentFolder,
			].sort((a, b) => a.id - b.id);
			state.folders[0].tasks.push(action.payload);
		},
		onLoad: (state) => {
			const tasks = [];
			for (let i = 1; i < state.folders.length; i++) {
				tasks.push(...state.folders[i].tasks);
			}
			console.log(tasks);
			state.folders[0].tasks = tasks;
		},
		changeTask: (state, action) => {},
		setActiveFolder: (state, action) => {
			state.currentFolder = state.folders[action.payload];
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder.id),
				state.currentFolder,
			].sort((a, b) => a.id - b.id);
		},
		addFolder: (state, action) => {
			state.folders.push(action.payload);
		},
		delFolder: (state, action) => {
			console.log(action.payload);
			if (action.payload === 1) {
				console.log('del all');
				state.folders = [
					{
						id: 1,
						color: 'all',
						title: 'Все задачи',
						active: true,
						tasks: [],
					},
				];
				state.currentFolder = state.folders[0];
				return;
			}
			state.folders = state.folders.filter((obj) => obj.id !== action.payload);
		},
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
	onLoad,
} = taskSlice.actions;
export default taskSlice.reducer;
