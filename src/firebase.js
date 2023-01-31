import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_YGNL7UlLoz1fpnMrHP0L0TGGEqDcQz4",
  authDomain: "satyakant-react-portfolio.firebaseapp.com",
  projectId: "satyakant-react-portfolio",
  storageBucket: "satyakant-react-portfolio.appspot.com",
  messagingSenderId: "1063498477488",
  appId: "1:1063498477488:web:81d9c476fb7217195e7075",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
