import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIITBQ6-9BJBHOejnDnE4yXq1Ye8H8OOM",
  authDomain: "crm-project-f23bd.firebaseapp.com",
  projectId: "crm-project-f23bd",
  storageBucket: "crm-project-f23bd.appspot.com",
  messagingSenderId: "219662477811",
  appId: "1:219662477811:web:21c8cfc223f52d6cfd0a86",
  measurementId: "G-L15W201935"
};


let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDb = firebase.firestore()
let firebaseAuth = firebaseApp.auth()
const userCollection = firebaseDb.collection('users');
const worksCollection = firebaseDb.collection('Work schedule');
export {firebaseAuth, firebaseDb, userCollection, worksCollection}
export default {
  firebase, firebaseAuth, firebaseDb, userCollection,worksCollection
}


