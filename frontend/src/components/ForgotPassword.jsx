import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent.');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-semibold">Forgot Password</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
