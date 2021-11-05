// dependencies
import { Link } from "react-router-dom";
//project files
import { useUserData } from "../../context/UserDataContext";
import avatar from "../../assets/images/avatar/avatar-placeholder.png";
import Header from "../../components/Header";
import Icon from "../../components/Icon";

export default function Home() {
  // Global state
  const { userData } = useUserData();

  return (
    <>
      <Header id="home-header" />
      <section id={"home"}>
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
            <Icon fileName={"list"} />
            <Link to={`/topics/`}>View topics</Link>
          </li>
          <hr />
        </ul>
      </section>
    </>
  );
}
