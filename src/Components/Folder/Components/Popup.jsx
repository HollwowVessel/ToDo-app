import React from 'react';
import './style.scss';

export const Popup = ({ handleClick }) => {
	return (
		<div className="task-popup">
			<input placeholder="Текст задачи" />
			<div>
				<button className="add">Добавить задачу</button>
				<button className="close" onClick={handleClick}>
					Отмена
				</button>
			</div>
		</div>
	);
};
