// dependencies
import { useHistory, Link } from "react-router-dom";
//project files
import { useAuthentication } from "../../context/AuthenticationContext";
import { useUserData } from "../../context/UserDataContext";
import { logOut } from "../../firebaseServices/authentication";
import avatar from "../../assets/images/avatar/avatar-placeholder.png";
import Header from "../../components/Header";

export default function Home() {
  // Global state
  const { userData } = useUserData();
  const { setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  // Methods
  async function onLogout() {
    const account = await logOut();
    setIsAuthenticated(false);
    history.push("/");
  }

  return (
    <>
      <Header id="home-header" />
      <section id={"home"}>
        <img
          src={avatar}
          alt="silhouette of a person's upper body"
          className={"avatar-home"}
        />
        <h3>Welcome {userData.fullName}.</h3>
        <ul>
          <li>
            <Link to={`/topics/`}>View all topics</Link>
          </li>
        </ul>
        <button> Add profile</button>

        <button onClick={onLogout}>Logout</button>
      </section>
    </>
  );
}
