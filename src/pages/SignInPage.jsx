import React, { useState } from 'react';
import { ArrowRight, LogIn, UserPlus } from 'lucide-react';
import { auth } from '../firebase.js'; // Corrected import path
import { signInWithEmailAndPassword } from 'firebase/auth'; // Specific function import

const SignInPage = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    if (!auth) {
      setError("Firebase Auth not initialized. Please refresh.");
      setIsLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User is now signed in, App component's onAuthStateChanged will handle redirection
      // console.log("User signed in successfully!");
    } catch (err) {
      // console.error("Sign-in error:", err.code, err.message);
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address format.');
          break;
        case 'auth/user-disabled':
          setError('User account has been disabled.');
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('Invalid email or password.');
          break;
        default:
          setError(`Sign-in failed: ${err.message}`);
          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-16 px-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-blue-700 w-full max-w-md text-center animate-in">
        <h2 className="text-4xl font-bold text-blue-300 mb-8 flex items-center justify-center">
          <LogIn className="w-10 h-10 mr-3" /> Client Login
        </h2>
        <p className="text-blue-200 mb-6">Access your personalized ByteHub client portal.</p>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-gray-800 text-white rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 bg-gray-800 text-white rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="bg-red-900 bg-opacity-30 border border-red-700 text-red-300 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 btn-hover-effect flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="spinner w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              <>Sign In <ArrowRight className="ml-2 w-5 h-5" /></>
            )}
          </button>
        </form>
        <p className="mt-8 text-blue-200">
          Don't have an account?{' '}
          <button onClick={() => setCurrentPage('signup')} className="text-blue-400 hover:underline font-medium focus:outline-none">
            Sign Up Now <UserPlus className="inline-block w-4 h-4 ml-1" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
