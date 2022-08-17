import React from 'react';

export const Task = () => {
	return (
		<div className="task">
			<div className="task-container">
				<input type="checkbox" />
				<span className="checkmark"></span>
			</div>
			<p>Изучить JS</p>
		</div>
	);
};
