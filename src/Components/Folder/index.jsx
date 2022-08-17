import React from 'react';
import './style.scss';

export const Folder = () => {
	return (
		<div className="folder-container">
			<h1>
				Покупки{' '}
				<span>
					<img src="/img/svg/edit.svg" />
				</span>
			</h1>
			<div className="tasks">
				<div className="task">
					<div className="task-container">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</div>
					<p>Изучить JS</p>
				</div>
				<div className="task">
					<div className="task-container">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</div>
					<p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
				</div>
				<div className="task">
					<div className="task-container">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</div>
					<p>Изучить JS</p>
				</div>
				<div className="task">
					<div className="task-container">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</div>
					<p>Изучить JS</p>
				</div>
			</div>
			<div>
				<button className="addTask">
					<span>
						<img src="/img/svg/plus.svg" />
					</span>
					Новая задача
				</button>
			</div>
		</div>
	);
};
