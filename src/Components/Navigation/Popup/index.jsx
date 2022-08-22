import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { changePopup } from '../../../redux/slices/addSlice';
import { addFolder } from '../../../redux/slices/folderSlice';

export const Popup = () => {
	const colors = ['gray', 'green', 'blue', 'pink', 'lime', 'purple', 'black', 'orange'];
	const dispatch = useDispatch();
	let id = useSelector((state) => state.changeFolder.folders);
	id = id.length + 1;
	const [activeColor, setActiveColor] = useState(0);
	const [text, setText] = useState('');
	console.log(id);
	function handleAddFolder(text, e) {
		dispatch(changePopup());
		dispatch(addFolder({ id, color: colors[activeColor], title: text, active: true, tasks: [] }));
	}

	return (
		<div className="modal" onClick={() => dispatch(changePopup())}>
			<div className="folder-popup" onClick={(e) => e.stopPropagation()}>
				<img
					src="/img/svg/close.svg"
					alt="close"
					className="close"
					onClick={() => dispatch(changePopup())}
				/>
				<input
					placeholder="Название папки"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<ul>
					{colors.map((color, ind) => (
						<li key={ind} onClick={() => setActiveColor(ind)}>
							<img
								src={`/img/svg/colors/${color}.svg`}
								alt={color}
								className={activeColor === ind ? 'active' : ''}
							/>
						</li>
					))}
				</ul>
				<button onClick={() => handleAddFolder(text)}>Добавить</button>
			</div>
		</div>
	);
};
