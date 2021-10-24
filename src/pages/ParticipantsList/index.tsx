import { getCollection } from "../../firebaseServices/firestore";
import { useCallback, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useUserData } from "../../context/UserDataContext";
import iUser from "../../interfaces/iUser";
import Participant from "../../components/Participant";
import ErrorComponent from "../../components/ErrorComponent";

export default function ParticipantsList() {
  const { userData } = useUserData();
  const history = useHistory();
  const [participants, setParticipants] = useState([]);
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
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
    console.log(participants);
  }, [fetchParticipants]);

  const Participants = participants.map((user: iUser) => (
    <Participant user={user} key={user.id} />
  ));
  //if (participants === undefined) return ErrorComponent;

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