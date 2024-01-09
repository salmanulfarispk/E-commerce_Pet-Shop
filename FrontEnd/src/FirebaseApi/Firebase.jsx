// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI96qCvsbHZvBgBJ4pnJre-y-d48m9yNE",
  authDomain: "ecommerce-83320.firebaseapp.com",
  projectId: "ecommerce-83320",
  storageBucket: "ecommerce-83320.appspot.com",
  messagingSenderId: "314855435557",
  appId: "1:314855435557:web:0efa801790e837a23cbecc",
  measurementId: "G-BJN0HX1DDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}
