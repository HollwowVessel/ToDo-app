import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { Task } from './Task';
import './style.scss';
import { Popup } from './Components/Popup';
import { changeTask } from '../../redux/slices/addSlice';

export const Folder = () => {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.changePopup.newTask);
	const folder = useSelector((state) => state.changeFolder.currentFolder);

	return (
		<div className="folder-container">
			<h1>
				Покупки
				<span>
					<img src="/img/svg/edit.svg" />
				</span>
			</h1>
			<div className="tasks">
				{folder.map((obj) => obj.tasks?.map((task, ind) => <Task key={ind} {...task} />))}
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
