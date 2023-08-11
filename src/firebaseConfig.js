import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDgc8AEeFvV6U_K44ryKT7tucWQGMsOfIU",
  authDomain: "fir-7619a.firebaseapp.com",
  projectId: "fir-7619a",
  storageBucket: "fir-7619a.appspot.com",
  messagingSenderId: "1043531605688",
  appId: "1:1043531605688:web:c01027963a402d7c72f64d",
  databaseURL: "https://fir-7619a-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
// the Firebase authentication handler
const auth = getAuth(app);
// the Realtime Database handler

const firestore = getFirestore(app);

// export const db = getDatabase(app);

// Initialize Firebase


export { auth, app, firestore }