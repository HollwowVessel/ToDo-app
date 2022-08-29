import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTask, editFolder, setFolders } from '../../../redux/slices/folderSlice';
import { Task } from '../Task';
import { Popup } from './Popup';

export const FolderContainer = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const folder = useSelector((state) => state.changeFolder.currentFolder);
	const [text, setText] = useState(folder.title);
	const [openPopup, setOpenPopup] = useState(false);
	function handleClick(e, text) {
		if (!text.trim().length) return;
		if (e.type !== 'click' && e.type !== 'keyup') {
			console.log('help');
			setText(text);
			return;
		}
		if (e.type === 'keyup' && e.key !== 'Enter') {
			return;
		}
		setOpenPopup((prev) => !prev);
		if (!openPopup) return;
		dispatch(setFolders({ ...folder, title: text }, `task${folder.id - 1}`));
		dispatch(editFolder(text));
	}
	useEffect(() => {
		setText(folder.title);
	}, [folder]);
	return (
		<div className="folder-container">
			<h1 onClick={(e) => e.stopPropagation}>
				{folder.title}
				<span onClick={(e) => handleClick(e, text)}>
					<img src="/img/svg/edit.svg" />
				</span>
				{openPopup && (
					<div className="title-popup">
						<input
							type="text"
							value={text}
							onChange={(e) => handleClick(e, e.target.value)}
							onKeyUp={(e) => handleClick(e, e.target.value)}
						/>
					</div>
				)}
			</h1>
			<div className="tasks">
				{folder && folder?.tasks?.length ? (
					folder.tasks.map((task, ind) => <Task key={ind} {...task} />)
				) : (
					<h1>Нет тасков :(</h1>
				)}
			</div>
			{!open ? (
				<button className="addTask" onClick={() => setOpen((prev) => !prev)}>
					<span>
						<img src="/img/svg/plus.svg" />
					</span>
					Новая задача
				</button>
			) : (
				<Popup handleClick={() => setOpen((prev) => !prev)} />
			)}
		</div>
	);
};
