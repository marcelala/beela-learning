import { useUserData } from "../../context/UserDataContext";

export default function AdminHome() {
  // Global state
  const { userData } = useUserData();

  return (
    <div>
      <h1>Admin Home</h1>
      <p>Welcome to our page {userData.fullName}.</p>
      <button> Create a topic</button>
      <button> Edit a topic</button>
      <button> Delete a topic</button>
      <button> View participants and delete them (delete auth info?)</button>

      <p> Topic: add, delete resourceItems(file and link items) and data</p>
      <button> upload files up to 10mb</button>
      <button> progress bar for upload</button>
    </div>
  );
}
