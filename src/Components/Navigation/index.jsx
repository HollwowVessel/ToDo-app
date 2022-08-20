import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import './style.scss';

import { Item } from './Item';
import { Popup } from './Popup';
import { setActiveFolder } from '../../redux/slices/folderSlice';
import { changePopup } from '../../redux/slices/addSlice';

export const Navigation = () => {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.changePopup.popupOpen);
	const currentFolder = useSelector((state) => state.changeFolder.folders);
	const [active, setActive] = useState(0);

	function handleActiveFolder(id) {
		dispatch(setActiveFolder(id));
		setActive(id);
	}

	return (
		<nav>
			<ul className="nav-menu">
				{currentFolder.map((obj, ind) => (
					<Item
						key={ind}
						{...obj}
						state={ind === active ? 'active' : ''}
						handleClick={() => handleActiveFolder(ind)}
					/>
				))}
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
