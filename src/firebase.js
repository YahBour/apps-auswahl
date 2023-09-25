import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeWMPLMbWHTmsfnEadJLMpPkgAs6DABFA",
  authDomain: "login-eins.firebaseapp.com",
  projectId: "login-eins",
  storageBucket: "login-eins.appspot.com",
  messagingSenderId: "131132855975",
  appId: "1:131132855975:web:ae56056158dbde2f5e2d82",
  measurementId: "G-V4HMX42Y11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
