import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFolders } from './redux/slices/folderSlice';
import { Folder } from './Components/Folder';
import { Navigation } from './Components/Navigation';

import './style.scss';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFolders());
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
