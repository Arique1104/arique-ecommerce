import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc  } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCZ1wawJ5BrGOfcD4H6S6TWWXVNdxvA4nE",
    authDomain: "arique-ecommerce-db.firebaseapp.com",
    projectId: "arique-ecommerce-db",
    storageBucket: "arique-ecommerce-db.appspot.com",
    messagingSenderId: "621126865809",
    appId: "1:621126865809:web:c1efefccfe3c5437024030"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    
};