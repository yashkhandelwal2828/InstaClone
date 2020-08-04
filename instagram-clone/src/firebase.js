import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDSP8vO-pO7ZBYcaLuyvJFr4f81yAYb5Gk',
	authDomain: 'instagram-clone-react-34ed1.firebaseapp.com',
	databaseURL: 'https://instagram-clone-react-34ed1.firebaseio.com',
	projectId: 'instagram-clone-react-34ed1',
	storageBucket: 'instagram-clone-react-34ed1.appspot.com',
	messagingSenderId: '554397075592',
	appId: '1:554397075592:web:50ed6f682c0efda0e0f73d',
	measurementId: 'G-W1F21L0SQX'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//   export default firebaseConfig;
