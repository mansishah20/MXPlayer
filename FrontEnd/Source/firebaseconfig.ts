// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSNLB6sOkOLgTCSRvYahvq4vhfR5f26Vw",
  authDomain: "mx-player-8feb3.firebaseapp.com",
  databaseURL: "https://mx-player-8feb3-default-rtdb.firebaseio.com",
  projectId: "mx-player-8feb3",
  storageBucket: "mx-player-8feb3.appspot.com",
  messagingSenderId: "1098914996899",
  appId: "1:1098914996899:web:a883b9fd4bdcda6ca35516",
  measurementId: "G-BVD54PJ0PH",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
