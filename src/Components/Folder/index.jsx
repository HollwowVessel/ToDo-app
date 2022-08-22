import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { Task } from './Task';
import './style.scss';
import { Popup } from './Components/Popup';
import { changeTask } from '../../redux/slices/addSlice';
import { onLoad } from '../../redux/slices/folderSlice';

export const Folder = () => {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.changePopup.newTask);
	const folder = useSelector((state) => state.changeFolder.currentFolder);
	useEffect(() => {
		dispatch(onLoad());
	});
	return (
		<div className="folder-container">
			<h1>
				{folder?.title}
				<span>
					<img src="/img/svg/edit.svg" />
				</span>
			</h1>
			<div className="tasks">
				{folder?.tasks.length ? (
					folder.tasks.map((task, ind) => <Task key={ind} {...task} />)
				) : (
					<h1>Нет тасков :(</h1>
				)}
			</div>
			{!open ? (
				<button className="addTask" onClick={() => dispatch(changeTask())}>
					<span>
						<img src="/img/svg/plus.svg" />
					</span>
					Новая задача
				</button>
			) : (
				<Popup handleClick={() => dispatch(changeTask())} />
			)}
		</div>
	);
};
