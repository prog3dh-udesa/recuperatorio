import firebase from "firebase";
import app from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyALRZOS1MSzGdw-eCEaFEdHPb-x1a3DqC0",
    authDomain: "backup-1d628.firebaseapp.com",
    projectId: "backup-1d628",
    storageBucket: "backup-1d628.firebasestorage.app",
    messagingSenderId: "77813609182",
    appId: "1:77813609182:web:14c89eb3f72180fcc5484f"
  };

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();
export const storage = app.storage();