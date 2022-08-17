import React, { useState } from 'react';

export const Task = ({ desc, status }) => {
	const [text, setText] = useState('');
	React.useEffect(() => {
		setText(desc);
	}, []);
	return (
		<div className="task">
			<div className="task-container">
				<input type="checkbox" />
				<span className="checkmark"></span>
			</div>
			<input className="task__desc" value={text} onChange={(e) => setText(e.target.value)} />
		</div>
	);
};
