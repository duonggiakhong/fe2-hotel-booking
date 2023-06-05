// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2CNYSynZKNz-UJQwttscVK78bV2FEYLI",
  authDomain: "fe2-hotel-booking.firebaseapp.com",
  databaseURL: "https://fe2-hotel-booking-default-rtdb.firebaseio.com",
  projectId: "fe2-hotel-booking",
  storageBucket: "fe2-hotel-booking.appspot.com",
  messagingSenderId: "142484670102",
  appId: "1:142484670102:web:88655184f3f477fd0a64b7",
  measurementId: "G-ZDDE5N80WT"

  // apiKey: "AIzaSyDZ-Qo3Q_TbIEmNAyxJMiNT5hAZw6QKBD0",
  // authDomain: "hotel-booking-78aaa.firebaseapp.com",
  // projectId: "hotel-booking-78aaa",
  // storageBucket: "hotel-booking-78aaa.appspot.com",
  // messagingSenderId: "255830644216",
  // appId: "1:255830644216:web:4448a536f8f0fd1299b20d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()