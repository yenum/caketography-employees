
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVTkmYbAKEFSe-lBOh9_OcvNlBRWuQdhw",
  authDomain: "caketography-employees-app.firebaseapp.com",
  projectId: "caketography-employees-app",
  storageBucket: "caketography-employees-app.appspot.com",
  messagingSenderId: "221391349432",
  appId: "1:221391349432:web:8468788a6e9fda247eb64d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()

export { projectFirestore }