import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delFolder } from '../../../redux/slices/folderSlice';

export const Item = ({ id, color, title, handleClick, state }) => {
	const dispatch = useDispatch();
	return (
		<li className={state ? `nav-menu__item ${state}` : 'nav-menu__item'} onClick={handleClick}>
			<img src={`/img/svg/colors/${color}.svg`} alt={color} />
			<Link to="/" className="">
				{title}
			</Link>
			<button>
				<img src="/img/svg/del.svg" alt="clear" onClick={() => dispatch(delFolder(id))} />
			</button>
		</li>
	);
};
