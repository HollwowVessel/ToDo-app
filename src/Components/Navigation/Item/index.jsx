import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delFolder, delFolders } from '../../../redux/slices/folderSlice';

export const Item = ({ id, color, title, handleClick, state }) => {
	const dispatch = useDispatch();
	function handleDel() {
		dispatch(delFolder(id));
		dispatch(delFolders(id));
	}
	return (
		<li className={state ? `nav-menu__item ${state}` : 'nav-menu__item'} onClick={handleClick}>
			<img src={`/img/svg/colors/${color}.svg`} alt={color} />
			<Link to="/" className="">
				{title}
			</Link>
			<button>
				{id === 1 ? undefined : (
					<img src="/img/svg/del.svg" alt="clear" onClick={() => handleDel()} />
				)}
			</button>
		</li>
	);
};
