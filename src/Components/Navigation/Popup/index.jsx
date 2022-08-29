import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { addFolder, setFolders } from '../../../redux/slices/folderSlice';

export const Popup = ({ handleClick }) => {
	const colors = ['gray', 'green', 'blue', 'pink', 'lime', 'purple', 'black', 'orange'];
	const dispatch = useDispatch();
	let id = useSelector((state) => state.changeFolder.folders).length + 1;
	const [activeColor, setActiveColor] = useState(0);
	const [text, setText] = useState('');
	console.log(id);
	function handleAddFolder(e, text) {
		if (!text.trim().length) return;
		if (e.type !== 'click' && e.type !== 'keyup') {
			return;
		}
		if (e.type === 'keyup' && e.key !== 'Enter') {
			return;
		}
		handleClick();
		dispatch(addFolder({ id, color: colors[activeColor], title: text, active: true, tasks: [] }));
		dispatch(setFolders({ id, color: colors[activeColor], title: text, active: true, tasks: [] }));
	}

	return (
		<div className="modal" onClick={() => handleClick()}>
			<div className="folder-popup" onClick={(e) => e.stopPropagation()}>
				<img src="/img/svg/close.svg" alt="close" className="close" onClick={() => handleClick()} />
				<input
					placeholder="Название папки"
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyUp={(e) => handleAddFolder(e, e.target.value)}
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
				<button onClick={(e) => handleAddFolder(e, text)}>Добавить</button>
			</div>
		</div>
	);
};
