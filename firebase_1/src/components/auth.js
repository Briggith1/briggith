import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../css/auth.css';  // Make sure you have the CSS file

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function signIn() {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError('');
        } catch (err) {
            setError('Invalid email or password');
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Sign In</h2>
                <form>
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="button" onClick={signIn}>Sign In</button>
                </form>
                <div className="footer-links">
                    <a href="#">Forgot password?</a>
                    <a href="#">Create an account</a>
                </div>
            </div>
        </div>
    );
}

export default Auth;
