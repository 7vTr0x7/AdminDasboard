import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

function Logout() {
  const handleLogout = () => {
    signOut(auth).then(() => {
      alert('Logged out successfully');
    }).catch((error) => {
      console.error(error.message);
      alert(error.message);
    });
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded">
      Logout
    </button>
  );
}

export default Logout;
