
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBpZBMgYY6LiQBlrLmZHOjBXpI-Wg3_EpY",
  authDomain: "netflix-4d4ae.firebaseapp.com",
  projectId: "netflix-4d4ae",
  storageBucket: "netflix-4d4ae.appspot.com",
  messagingSenderId: "935455291931",
  appId: "1:935455291931:web:b5551b37ed37eb5e7756be",
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
