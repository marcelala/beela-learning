import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { newTopic } from "../../types/newTopic";

export default function AdminHome() {
  // Global state
  const { userData } = useUserData();

  return (
    <section id="home-admin">
      <h1>Admin Home</h1>
      <p>Welcome {userData.fullName}!</p>
      <ul>
        <li>
          <Link to={`/admin-topics/newTopic`}>Create a topic</Link>
        </li>
        <li>
          <Link to={`/topics/`}>View and manage topics</Link>
        </li>
        <li>
          <Link to="/participants"> View and manage participants</Link>
        </li>
      </ul>
    </section>
  );
}
