import {
  deleteDocument,
  getCollection,
} from "../../firebaseServices/firestore";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useUserData } from "../../context/UserDataContext";
import iUser from "../../interfaces/iUser";
import Participant from "../../components/Participant";
import { deleteAccount } from "../../firebaseServices/authentication";
import Icon from "../../components/Icon";
import ErrorComponent from "../../components/ErrorComponent";

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
    e.preventDefault();
    const userEmail = participant.email;
    const userId = participant.id;

    if (
      window.confirm("" + "Do you really want to remove this participant? ?")
    ) {
      // @ts-ignore
      await deleteAccount({ userEmail, userId });
      await deleteDocument("userData", participant.id);
      alert("Participant removed");
    }
  }
  const Participants = participants.map((user: iUser) =>
    user.userRole === "participant" ? (
      <div className={"participant-container"} key={user.id}>
        <Participant user={user} />
        {admin && (
          <button onClick={(e) => onDelete(user, e)}>
            {" "}
            <Icon fileName={"bin"} />{" "}
          </button>
        )}
      </div>
    ) : null
  );

  if (participants === undefined) return ErrorComponent;

  return (
    <section className="ParticipantsList">
      {status === 0 && <Spinner />}
      {status === 1 && <ul>{Participants}</ul>}
      {status === 2 && <p>Error 🚨</p>}
      <button className="btn btn-primary" onClick={() => history.goBack()}>
        Go back
      </button>
    </section>
  );
}
