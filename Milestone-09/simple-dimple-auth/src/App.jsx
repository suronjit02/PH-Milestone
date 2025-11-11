import "./App.css";

import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase.init";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  
  const [user, setUser] = useState(null);

  const handleSignInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
    })
  };

  const handleSignInGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user)
      })
      .catch(error => {
        console.log(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.log(error);
    })
  }

  return (
    <>
      <h1>Simple Dimple</h1>

      {user ? 
        <button onClick={handleSignOut}>Sign Out</button>
       : <>
          <button onClick={handleSignInGoogle}>Sign In With Google</button>
          
          <button onClick={handleSignInGitHub}>Sign In With GitHub</button>
          </>
      }

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
