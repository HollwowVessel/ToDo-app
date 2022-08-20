import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Folder } from './Components/Folder';
import { Navigation } from './Components/Navigation';
import { changePopup } from './redux/slices/addSlice';
import { onLoad } from './redux/slices/folderSlice';
import './style.scss';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(onLoad());
	});
	return (
		<div className="App">
			<div className="container">
				<Navigation />
				<Folder />
			</div>
		</div>
	);
}

export default App;
