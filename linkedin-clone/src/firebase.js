import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB_Le4hneMH2IMLD1wAqIsiuxhjPNJjSqo",
  authDomain: "linkedin-clone-659bf.firebaseapp.com",
  projectId: "linkedin-clone-659bf",
  storageBucket: "linkedin-clone-659bf.appspot.com",
  messagingSenderId: "250563911594",
  appId: "1:250563911594:web:c92f35a910280b6301d5d3",
  measurementId: "G-CK4ZT0GB17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
