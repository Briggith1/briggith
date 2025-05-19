import { auth } from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import React, {useState} from "react";
import '../css/auth.css'
function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)

async function signUp() {
    try { 
        await createUserWithEmailAndPassword(auth, email, password)
    }
    catch(err) {
        alert(err)

    }
};
async function signIn() {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch(err) {
        alert(err)
    }
}
async function logout() {
    try{
        await signOut(auth);
    }catch(err) {
        console.error(err);
    }
    }




    return(
      

<div class="container" id="form-container">
    <h2 id="form-title">Sign in</h2>
    <input id="username" placeholder="Email.."
                onChange={(e)   => setEmail (e.target.value)}
                />
  <input id="password" placeholder="password.."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp}>Sign Up</button>
            <button onClick={signIn}>Sign In</button>
            <button onClick={logout}>Sign Out</button>
    <div class="toggle" onclick="toggleForm()">Don't have an account? Sign up</div>

        </div>
    )
}

export default Auth;