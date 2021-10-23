import { useHistory } from "react-router-dom";
import { useAuthentication } from "../../context/AuthenticationContext";
import { useUserData } from "../../context/UserDataContext";
import { logOut } from "../../firebaseServices/authentication";

export default function Home() {
  // Global state
  const { userData } = useUserData();
  const { setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  // Methods
  async function onLogout() {
    const account = await logOut();
    console.log("Home.jsx account", account);
    setIsAuthenticated(false);
    history.push("/");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our page {userData.name}.</p>
      <button> Add profile</button>
      <button> View topics</button>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
