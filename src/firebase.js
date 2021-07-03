import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw4QtKTKM4cS5jv6KUe3WEpgWf2bInr2U",
  authDomain: "disney-x.firebaseapp.com",
  projectId: "disney-x",
  storageBucket: "disney-x.appspot.com",
  messagingSenderId: "981884872622",
  appId: "1:981884872622:web:0acbabae6825f545d40a3f",
  measurementId: "G-YJ5LXYYJQW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;