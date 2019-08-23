import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyChQqFFUT-EAQShFPMmORLM-UcYu11VJhY",
    authDomain: "projecttracker-cbaee.firebaseapp.com",
    databaseURL: "https://projecttracker-cbaee.firebaseio.com",
    projectId: "projecttracker-cbaee",
    storageBucket: "",
    messagingSenderId: "306753779810",
    appId: "1:306753779810:web:a51b7b3392adfd4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase