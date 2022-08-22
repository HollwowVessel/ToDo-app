import { Folder } from './Components/Folder';
import { Navigation } from './Components/Navigation';

import './style.scss';

function App() {
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
