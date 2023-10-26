import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAOyRROrT-eeAUfiad2dsWjJH7C-Fpsgeg",
    authDomain: "fitpal-c0893.firebaseapp.com",
    databaseURL: "https://fitpal-c0893-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitpal-c0893",
    storageBucket: "fitpal-c0893.appspot.com",
    messagingSenderId: "900356005493",
    appId: "1:900356005493:web:1752d69ac0bc5fe919a23c",
    measurementId: "G-8FV4005HG0"
};

const fBapp = initializeApp(firebaseConfig);
const fBdb = getDatabase(fBapp);


export { fBdb, ref, onValue };