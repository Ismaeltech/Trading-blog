import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-H5SeB5CxmrTRDp8-IdsaQLuYk3lvCec",
    authDomain: "tradingblogs-4fb2c.firebaseapp.com",
    projectId: "tradingblogs-4fb2c",
    storageBucket: "tradingblogs-4fb2c.appspot.com",
    messagingSenderId: "503862176814",
    appId: "1:503862176814:web:fd02f07f534b12023183bf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();