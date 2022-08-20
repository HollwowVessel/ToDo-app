import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/slices/folderSlice';
import './style.scss';

export const Popup = ({ handleClick }) => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	function handleAddTask(text) {
		setText('');
		dispatch(addTask({ desc: text, status: 'Uncompleted' }));
		handleClick();
	}

	return (
		<div className="task-popup">
			<input placeholder="Текст задачи" value={text} onChange={(e) => setText(e.target.value)} />
			<div>
				<button className="add" onClick={() => handleAddTask(text)}>
					Добавить задачу
				</button>
				<button className="close" onClick={handleClick}>
					Отмена
				</button>
			</div>
		</div>
	);
};
