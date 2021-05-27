import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    
  });
} else {
  firebase.app(); // if already initialized, use that one
}
const db = firebase.database();
export default firebase;
export { db };
