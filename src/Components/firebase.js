import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVNKuvymxoL6tNgdBy2QBHRc5GgVia66I",
  authDomain: "esquif-f53eb.firebaseapp.com",
  databaseURL: "https://esquif-f53eb.firebaseio.com",
  projectId: "esquif-f53eb",
  storageBucket: "esquif-f53eb.appspot.com",
  messagingSenderId: "512645094335",
  appId: "1:512645094335:web:ece133fc63dd743ce79f0a",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
