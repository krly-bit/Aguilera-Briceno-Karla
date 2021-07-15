import firebase from 'firebase/app';
import 'firebase/firestore';

var app= firebase.initializeApp({
apiKey: "AIzaSyB1PkZKJ3NX6CcmfESP4wCs8NXgjVppTbo",
    authDomain: "ecommerce-karaguilera.firebaseapp.com",
    projectId: "ecommerce-karaguilera",
    storageBucket: "ecommerce-karaguilera.appspot.com",
    messagingSenderId: "1069924452522",
    appId: "1:1069924452522:web:3b751372e7300f007da8d3",
    measurementId: "G-QLEB7G5EK6"})

    export function getFirebase() {
        return app;
      }
      export function getFirestore() {
        return firebase.firestore(app);
      }