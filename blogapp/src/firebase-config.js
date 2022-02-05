// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore';
import { getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxTENOGOlI3JkJw1YP8QtqPFaoeZ4738g",
  authDomain: "blogproject-3079e.firebaseapp.com",
  projectId: "blogproject-3079e",
  storageBucket: "blogproject-3079e.appspot.com",
  messagingSenderId: "929134482318",
  appId: "1:929134482318:web:b25409655cbfccb7a80adf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// for database
export const db = getFirestore(app);
// for authentication
export const auth = getAuth(app);
// for google auth
export const provider = new GoogleAuthProvider();