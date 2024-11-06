import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

function Logout() {
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        await signOut(auth);
        alert("Logged out successfully");
      } catch (error) {
        alert("Error logging out. Please try again.");
      }
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="button bg-red-500 hover:bg-red-600">
      Logout
    </button>
  );
}

export default Logout;
