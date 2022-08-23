import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { collection, getDocs, query } from 'firebase/firestore';
import db from '../../firebase';
import { folderMock } from '../../Mocks/Folder';

const getFolders = createAsyncThunk('folders/getFolders', async (todoId) => {
	const q = query(collection(db, '0'));
	const querySnapshot = await getDocs(q);
	const tasks = [];
	querySnapshot.forEach((doc) => {
		tasks.push(doc.data());
	});
	return tasks;
});

const initialState = {
	folders: folderMock,
	currentFolder: folderMock[0],
};

const taskSlice = createSlice({
	name: 'taskSlice',
	initialState,
	reducers: {
		addTask: (state, action) => {
			const task = action.payload;
			if (state.folders[0].tasks.length) {
				task.id = state.folders[0].tasks[state.folders[0].tasks.length - 1].id + 1;
			} else {
				task.id = 1;
			}
			state.currentFolder.tasks.push(task);
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
			state.folders[0].tasks = tasks;
		},
		setActive: (state, action) => {
			let task = state.currentFolder.tasks.filter((obj) => obj.id === action.payload.id)[0];
			task.checked = action.payload.checked;
			if (state.currentFolder.id === 1) {
				let folder = {};
				for (let item of state.folders) {
					for (let tempTask of item.tasks) {
						if (tempTask.id === task.id) {
							folder = item;
							folder.tasks = [...folder.tasks.filter((obj) => obj.id !== tempTask.id), task].sort(
								(a, b) => a.id - b.id,
							);
							break;
						}
					}
				}
				console.log(folder.tasks);
				state.folders = [...state.folders.filter((obj) => obj.id !== folder.id), folder].sort(
					(a, b) => a.id - b.id,
				);
				const tasks = [];
				for (let i = 1; i < state.folders.length; i++) {
					tasks.push(...state.folders[i].tasks);
				}
				state.folders[0].tasks = tasks;
				return;
			}
			state.currentFolder.tasks = [
				...state.currentFolder.tasks.filter((obj) => obj.id !== action.payload.id),
				task,
			].sort((a, b) => a.id - b.id);

			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder.id),
				state.currentFolder,
			].sort((a, b) => a.id - b.id);
		},
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
			if (action.payload === 1) {
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
			state.currentFolder = state.folders[0];
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder.id),
				state.currentFolder,
			].sort((a, b) => a.id - b.id);
		},
		editFolder: (state, action) => {
			state.currentFolder.title = action.payload;
			state.folders = [
				...state.folders.filter((obj) => obj.id !== state.currentFolder.id),
				state.currentFolder,
			].sort((a, b) => a.id - b.id);
		},
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
	setActive,
} = taskSlice.actions;
export default taskSlice.reducer;
