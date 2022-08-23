import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActive } from '../../../redux/slices/folderSlice';

export const Task = ({ id, desc, checked }) => {
	const dispatch = useDispatch();
	return (
		<div className="task">
			<div className="task-container">
				<input
					type="checkbox"
					checked={checked}
					onChange={() => dispatch(setActive({ id: id, checked: !checked }))}
				/>
				<span className="checkmark"></span>
			</div>
			<p className="task__desc" style={{ textDecoration: checked ? 'line-through' : 'none' }}>
				{desc}
			</p>
		</div>
	);
};
