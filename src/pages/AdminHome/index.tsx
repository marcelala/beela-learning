import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { newTopic } from "../../types/newTopic";

export default function AdminHome() {
  // Global state
  const { userData } = useUserData();

  return (
    <section id="home-admin">
      <h1>Admin Home</h1>
      <p>Welcome to our page {userData.fullName}</p>
      <Link to={`/admin-topics/newTopic`}>Create a topic</Link>
      <Link to={`/topics/`}>View and manage topics</Link>
      <Link to="/participants"> View and manage participants</Link>

      <button> Edit a topic </button>
      <button> Delete a topic </button>

      <p> Topic: add, delete resourceItems(file and link items) and data</p>

      <button> upload files up to 10mb</button>

      <button> progress bar for upload</button>
    </section>
  );
}
