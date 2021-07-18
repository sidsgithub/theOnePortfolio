import { firebaseConfig } from "../../../config";
import firebase from 'firebase/app';
import 'firebase/storage';       
import 'firebase/firestore';  

let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // if already initialized
}
export const db = firebaseApp.firestore();