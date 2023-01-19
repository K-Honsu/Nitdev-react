// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdPIqaRaI5Kdoesi1MAit4E8yl-wOOfUs",
  authDomain: "react-4a416.firebaseapp.com",
  projectId: "react-4a416",
  storageBucket: "react-4a416.appspot.com",
  messagingSenderId: "922727738897",
  appId: "1:922727738897:web:77eaf5ca5b0ef7ccbe8bb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
