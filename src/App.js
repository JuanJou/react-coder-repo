import React from "react";
import { Nav } from "./components/Nav";
import firebase from "firebase";
import { auth } from "firebase";
import { createStore } from "redux";
import reducers from "./redux/store";
import { Provider } from "react-redux";
import { Context } from "./context";

function App(props) {
  const ah = auth();
  const store = createStore(reducers);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  ah.onAuthStateChanged((user) => {
    console.log(user);
  });
  return (
    <Provider store={store}>
      <Context.Provider value={{ showText: true }}>
        <div className="App">
          <Nav></Nav>
          <button onClick={() => ah.signInWithRedirect(googleProvider)}>
            Sign in
          </button>
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
