import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ color, title, handleClick, state }) => {
	return (
		<li className={state ? `nav-menu__item ${state}` : 'nav-menu__item'} onClick={handleClick}>
			<img src={`/img/svg/colors/${color}.svg`} alt={color} />
			<Link to="/" className="">
				{title}
			</Link>
			<button>
				<img src="/img/svg/del.svg" alt="clear" />
			</button>
		</li>
	);
};
