import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import './style.scss';

import { Item } from './Item';
import { Popup } from './Popup';
import { onLoad, setActiveFolder } from '../../redux/slices/folderSlice';
import { changePopup } from '../../redux/slices/addSlice';

export const Navigation = () => {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.changePopup.popupOpen);
	const navFolders = useSelector((state) => state.changeFolder.folders);
	const [active, setActive] = useState(0);

	function handleActiveFolder(id) {
		dispatch(setActiveFolder(id));
		setActive(id);
	}

	return (
		<nav>
			<ul className="nav-menu">
				{navFolders.length ? (
					navFolders.map((obj, ind) => (
						<Item
							key={ind}
							{...obj}
							state={ind === active ? 'active' : ''}
							handleClick={() => handleActiveFolder(ind)}
						/>
					))
				) : (
					<Item
						key={1}
						{...navFolders}
						state={1 === active ? 'active' : ''}
						handleClick={() => handleActiveFolder(1)}
					/>
				)}
			</ul>
			<div className="nav-popup">
				<button className="addFolder" onClick={() => dispatch(changePopup())}>
					<span>
						<img src="/img/svg/plus.svg" />
					</span>
					Добавить папку
				</button>
				{open && <Popup />}
			</div>
		</nav>
	);
};
