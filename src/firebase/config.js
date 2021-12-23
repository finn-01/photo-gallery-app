// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDh9INWVUcTQp_UQYavbHo-VcMmJx78PHw",
	authDomain: "photo-gallery-firebase-cdbf5.firebaseapp.com",
	projectId: "photo-gallery-firebase-cdbf5",
	storageBucket: "photo-gallery-firebase-cdbf5.appspot.com",
	messagingSenderId: "723879905484",
	appId: "1:723879905484:web:084936f0a1aab39cc39a69",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectFirestore };
