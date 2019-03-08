import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCojB7II9h9ZWTZ2YjmpG3-QZ9scFE0DxU",
  authDomain: "cinephile-3d1f8.firebaseapp.com",
  databaseURL: "https://cinephile-3d1f8.firebaseio.com",
  projectId: "cinephile-3d1f8",
  storageBucket: "cinephile-3d1f8.appspot.com",
  messagingSenderId: "149738048759"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;