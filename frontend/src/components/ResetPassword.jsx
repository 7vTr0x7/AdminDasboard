import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { confirmPasswordReset } from "firebase/auth";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsError(true);
      return;
    }

    if (newPassword.length < 6) {
      setMessage("Password should be at least 6 characters long.");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage(
        "Password reset successfully. You can now log in with your new password."
      );
      setIsError(false);
    } catch (error) {
      setMessage(
        "Failed to reset password. Please try again or request a new link."
      );
      setIsError(true);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Reset Your Password
        </h1>
        {message && (
          <p
            className={`text-center ${
              isError ? "text-red-500" : "text-green-500"
            }`}>
            {message}
          </p>
        )}

        <form className="space-y-4" onSubmit={handlePasswordReset}>
          <input
            type="password"
            placeholder="New Password"
            className="input-field"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`button w-full ${
              loading ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            disabled={loading}>
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
