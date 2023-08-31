import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAO8FVH9JFPOUt8iji8NxjH6o3hNZI0KpM",
    authDomain: "whatsapp-mern-303ee.firebaseapp.com",
    projectId: "whatsapp-mern-303ee",
    storageBucket: "whatsapp-mern-303ee.appspot.com",
    messagingSenderId: "272060683246",
    appId: "1:272060683246:web:f5f14db841d16ba1d734ff"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;