const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyAzDBgeMDUZBfReqWKhlmTz2PfpEg0nhvo", //process.env.FIREBASE_API_KEY,
  authDomain: "todo-app-2a5e2.firebaseapp.com", //process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "todo-app-2a5e2", //process.env.FIREBASE_PROJECT_ID,
  storageBucket: "todo-app-2a5e2.appspot.com", //process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "816586630857", //process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:816586630857:web:8eb29a8f83b2a9aac98f18",
  measurementId: "G-NR8VRBBRHQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
