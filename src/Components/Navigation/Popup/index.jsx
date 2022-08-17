import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es';
import { changeActiveColor } from '../../../redux/slices/activeSlice';
import { changePopup } from '../../../redux/slices/addSlice';

export const Popup = () => {
	const colors = ['gray', 'green', 'blue', 'pink', 'lime', 'purple', 'black', 'orange'];
	const dispatch = useDispatch();
	const { activeColor } = useSelector((state) => state.setActive);

	return (
		<div className="modal" onClick={() => dispatch(changePopup())}>
			<div className="folder-popup" onClick={(e) => e.stopPropagation()}>
				<img
					src="/img/svg/close.svg"
					alt="close"
					className="close"
					onClick={() => dispatch(changePopup())}
				/>
				<input placeholder="Название папки" />
				<ul>
					{colors.map((color, ind) => (
						<li key={ind} onClick={() => dispatch(changeActiveColor(ind))}>
							<img
								src={`/img/svg/colors/${color}.svg`}
								alt={color}
								className={activeColor === ind ? 'active' : ''}
							/>
						</li>
					))}
				</ul>
				<button onClick={() => dispatch(changePopup())}>Добавить</button>
			</div>
		</div>
	);
};
