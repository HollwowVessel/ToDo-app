import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import './style.scss';
import { folderMock } from '../../Mocks/Folder';
import { Item } from './Item';
import { Popup } from './Popup';
import { changePopup } from '../../redux/slices/addSlice';
import { changeActiveFolder } from '../../redux/slices/activeSlice';

export const Navigation = () => {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.changePopup.popupOpen);
	const active = useSelector((state) => state.setActive.activeFolder);
	return (
		<nav>
			<ul className="nav-menu">
				{folderMock.map((obj, ind) => (
					<Item
						key={ind}
						{...obj}
						state={ind === active ? 'active' : ''}
						handleClick={() => dispatch(changeActiveFolder(ind))}
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
