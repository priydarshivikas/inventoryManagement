import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6OVNTvkjAmysjR5H2_GhrW8kDK3zMsrs",
  authDomain: "react-project-database-da809.firebaseapp.com",
  databaseURL: "https://react-project-database-da809-default-rtdb.firebaseio.com",
  projectId: "react-project-database-da809",
  storageBucket: "react-project-database-da809.appspot.com",
  messagingSenderId: "864471893228",
  appId: "1:864471893228:web:16782532ade20a8a7e91c9",
  measurementId: "G-HSCM4X7R7N"
};
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
