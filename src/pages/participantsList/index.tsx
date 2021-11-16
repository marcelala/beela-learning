import {
  deleteDocument,
  getCollection,
} from "../../firebaseServices/firestore";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useUserData } from "../../context/UserDataContext";
import iUser from "../../interfaces/iUser";
import Participant from "../../components/Participant";
import Icon from "../../components/Icon";
import ErrorComponent from "../../components/ErrorComponent";
import Toolbar from "../../components/Toolbar";
import Header from "../../components/Header";

export default function ParticipantsList() {
  const { userData } = useUserData();
  const history = useHistory();
  const [participants, setParticipants] = useState([]);
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
  const admin = userData.userRole === "admin";

  // Methods
  const fetchParticipants = useCallback(async (path: string) => {
    try {
      const fetchedUsers = await getCollection(path);
      // @ts-ignore
      setParticipants(fetchedUsers);
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchParticipants("userData");
  }, [fetchParticipants]);

  async function onDelete(participant: iUser, e: FormEvent) {
    if (
      window.confirm("" + "Do you really want to remove this participant? ?")
    ) {
      // @ts-ignore
      await deleteDocument("participants", participant.id);
      alert("Participant removed");
    }
  }
  const Participants = participants.map((user: iUser) =>
    user.userRole === "participant" ? (
      <div key={user.id}>
        <li>
          <button onClick={(e) => onDelete(user, e)}>
            <Icon fileName={"remove"} />
          </button>
          <Participant user={user} />
        </li>
        <hr />
      </div>
    ) : null
  );

  if (participants === undefined) return ErrorComponent;

  if (Participants.length === 0)
    return <p>There are no participants registered</p>;

  return (
    <>
      <Header id="header-participantsList" />
      <section id="home">
        <h1>Participants</h1>
        {status === 0 && <Spinner />}
        {status === 1 && <ul className="participants">{Participants}</ul>}
        {status === 2 && <p>Error 🚨</p>}
        <button className="btn btn-primary" onClick={() => history.goBack()}>
          Go back
        </button>
      </section>
      {admin && <Toolbar />}
    </>
  );
}
