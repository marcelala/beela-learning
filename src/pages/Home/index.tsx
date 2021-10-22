import { useHistory } from "react-router-dom";
import { useAuthentication } from "../../context/AuthenticationContext";
import { useUser } from "../../context/UserContext";
import { logOut } from "../../firebaseServices/authentication";

export default function Home() {
  // Global state
  const { user } = useUser();
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
      <p>Welcome to our page {user.name}.</p>
      <button> Add profile</button>
      <button> View topics</button>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
