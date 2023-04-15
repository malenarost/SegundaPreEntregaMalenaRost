import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq9MRkoxV_VH7dNbOdUIkMMTZKne3kWWA",
  authDomain: "reactecommercemalenarost.firebaseapp.com",
  projectId: "reactecommercemalenarost",
  storageBucket: "reactecommercemalenarost.appspot.com",
  messagingSenderId: "1069343108272",
  appId: "1:1069343108272:web:204eaac473b116e1d31f75",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
