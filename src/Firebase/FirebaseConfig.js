import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8oYNbnyCWpVjJD6c1xJXQvQ4JONoMYsY",
  authDomain: "tienda-con-react-js.firebaseapp.com",
  projectId: "tienda-con-react-js",
  storageBucket: "tienda-con-react-js.appspot.com",
  messagingSenderId: "214228769855",
  appId: "1:214228769855:web:a0d1a527ae6b741d01ec8a",
  measurementId: "G-FYF2P2W9TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);