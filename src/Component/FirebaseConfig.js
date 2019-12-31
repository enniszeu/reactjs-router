import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCv0yRBVDg5aRNdrV5LrclEyYFshfYKmZo",
  authDomain: "book-4de3e.firebaseapp.com",
  databaseURL: "https://book-4de3e.firebaseio.com",
  projectId: "book-4de3e",
  storageBucket: "book-4de3e.appspot.com",
  messagingSenderId: "921069884678",
  appId: "1:921069884678:web:0e3dba8e759fa2aead7a87",
  measurementId: "G-10K1T4GD5J"
};

const firebaseApp = firebase.initializeApp(config)
export default firebaseApp