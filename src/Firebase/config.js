import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2Xe6SMZ-H5QQQ4cc3xlwJ7mBRrtY0S6s",
    authDomain: "chamanrugs-webapp.firebaseapp.com",
    projectId: "chamanrugs-webapp",
    storageBucket: "chamanrugs-webapp.appspot.com",
    messagingSenderId: "226271975265",
    appId: "1:226271975265:web:0a48f071b00795853cd720"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

// firebase storage
const projectStorage = firebase.storage();

// firebase database
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, fire as default };

