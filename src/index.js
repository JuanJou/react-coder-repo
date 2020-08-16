import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initFirebase } from "./firebase-config";
import firebase from "firebase";

const app = initFirebase();
export const auth = app.auth();
export const firestore = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
app
  .firestore()
  .collection("Productos")
  .add({
    nombre: "Licuadora",
    marca: "Samsung",
    date: new Date(),
  })
  .then(console.log)
  .catch(console.log);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
