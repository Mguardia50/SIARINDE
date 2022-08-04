
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from  "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
  
  apiKey: "AIzaSyBWV8aaUfyru7ecvj2uT0-9bRkEkQsYajs",
  authDomain: "siarinde.firebaseapp.com",
  projectId: "siarinde",
  storageBucket: "siarinde.appspot.com",
  messagingSenderId: "563062340227",
  appId: "1:563062340227:web:37e2530d78af15fb2ab9b6",
  measurementId: "G-3X8DBVG8TT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

//esto lo dejamos asi por el resto del proyecto