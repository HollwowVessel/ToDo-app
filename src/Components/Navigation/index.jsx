import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export const Navigation = () => {
	return (
		<nav>
			<ul className="nav-menu">
				<li className="nav-menu__item">
					<img src="/img/svg/all.svg" alt="all" />
					<Link to="/" className="">
						Все задачи
					</Link>
				</li>
				<li className="nav-menu__item active">
					<img src="/img/svg/green.svg" alt="green" />
					<Link to="/" className="">
						Покупки
					</Link>
					<button>
						<img src="/img/svg/del.svg" alt="clear" />
					</button>
				</li>
				<li className="nav-menu__item">
					<img src="/img/svg/red.svg" alt="red" />
					<Link to="/" className="blue">
						Фронтенд
					</Link>
					<button>
						<img src="/img/svg/del.svg" alt="clear" />
					</button>
				</li>
			</ul>
			<div>
				<button className="addFolder">
					<span>
						<img src="/img/svg/plus.svg" />
					</span>
					Добавить папку
				</button>
			</div>
		</nav>
	);
};
