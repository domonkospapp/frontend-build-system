import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl6vi1MB8IZb3Cm5km57_o84BQ6Xu2mcI",
  authDomain: "researchmanager-64e3b.firebaseapp.com",
  projectId: "researchmanager-64e3b",
  storageBucket: "researchmanager-64e3b.appspot.com",
  messagingSenderId: "69333235971",
  appId: "1:69333235971:web:e88d1d9badb81ca8255136",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
}
