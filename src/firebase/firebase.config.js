import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxUTC0d3LVl6PV33E1pDICtGr00l_TgJU",
  authDomain: "find-dream-jobs.firebaseapp.com",
  projectId: "find-dream-jobs",
  storageBucket: "find-dream-jobs.appspot.com",
  messagingSenderId: "839210357636",
  appId: "1:839210357636:web:90f5302b3abe35a21bc3d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
