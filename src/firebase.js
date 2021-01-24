import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQqe9accntx_y8RXjGQr2BRbKRxhbqemc",
  authDomain: "whats-app-clone-9a5d3.firebaseapp.com",
  projectId: "whats-app-clone-9a5d3",
  storageBucket: "whats-app-clone-9a5d3.appspot.com",
  messagingSenderId: "199722226316",
  appId: "1:199722226316:web:ab3b44e36e0c563eda61a9",
  measurementId: "G-4GL2SQ01Z6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;