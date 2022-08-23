import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBbOUiRB5nX5KrTbaSRsBvSTFHEwiC-Pg8',
	authDomain: 'todo-app-7e833.firebaseapp.com',
	projectId: 'todo-app-7e833',
	storageBucket: 'todo-app-7e833.appspot.com',
	messagingSenderId: '1007622388945',
	appId: '1:1007622388945:web:14ee3d89a263a978fbd9f0',
	measurementId: 'G-JD3DL8PN3C',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
