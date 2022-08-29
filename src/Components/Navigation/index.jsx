import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import './style.scss';

import { Item } from './Item';
import { Popup } from './Popup';
import { getFolders, onLoad, setActiveFolder } from '../../redux/slices/folderSlice';

export const Navigation = () => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
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
				<button className="addFolder" onClick={() => setOpen((prev) => !prev)}>
					<span>
						<img src="/img/svg/plus.svg" />
					</span>
					Добавить папку
				</button>
				{open && <Popup handleClick={() => setOpen((prev) => !prev)} />}
			</div>
		</nav>
	);
};
