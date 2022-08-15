import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA_ZXmrBJuZonTS7jEtVDGbIhHqgPhWqgA",
    authDomain: "instagram-clone-7bf87.firebaseapp.com",
    projectId: "instagram-clone-7bf87",
    storageBucket: "instagram-clone-7bf87.appspot.com",
    messagingSenderId: "552454241330",
    appId: "1:552454241330:web:20e16e61a45c5bb485d02b"
};

firebase.initializeApp(firebaseConfig)

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

// export const auth = firebase.auth();
// export const db = firebase.firestore();
// export const storage = firebase.storage();

// export const firebaseApp = firebase.initializeApp(firebaseConfig);


// !firebaseConfig.apps.length ? firebaseConfig.initializeApp(firebaseConfig) : firebaseConfig.app()

// const app = initializeApp(config);
// const Auth = getAuth(app);


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();


// export { auth, provider };
export default firebase;