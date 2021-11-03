import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import avatar from "assets/images/avatar/avatar-placeholder.png";
import Toolbar from "../../components/Toolbar";
import Header from "../../components/Header";
import Icon from "../../components/Icon";

export default function AdminHome() {
  // Global state
  const { userData } = useUserData();

  return (
    <>
      <Header />
      <section id="home">
        <img
          src={avatar}
          alt="silhouette of a person's upper body"
          className={"avatar-home"}
        />
        <h2>
          Welcome <b>{userData.fullName}</b>
        </h2>
        <ul>
          <hr />
          <li>
            <Icon fileName={"file"} />
            <Link to={`/admin-topics/newTopic`}>Create a topic</Link>
          </li>
          <hr />
          <li>
            <Icon fileName={"list"} />
            <Link to={`/topics/`}>View and manage topics</Link>
          </li>
          <hr />
          <li>
            <Icon fileName={"user"} />
            <Link to="/participants"> View and manage participants</Link>
          </li>
          <hr />
        </ul>
      </section>
      <Toolbar />
    </>
  );
}
