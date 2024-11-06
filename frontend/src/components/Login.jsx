import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Use navigate instead of history.push
    } catch (error) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        {error && <p className="text-center text-red-600">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="input-field w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`button w-full ${
              loading ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex justify-between text-sm text-gray-600">
          <Link to="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
