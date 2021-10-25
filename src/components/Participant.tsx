import { useHistory, useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import iUser from "../interfaces/iUser";
import PropsUser from "../types/PropsUser";

export default function Participant({ user }: PropsUser) {
  const history = useHistory();
  // @ts-ignore
  const { fullName, email, city } = user;
  if (user === undefined) return <ErrorComponent />;
  return (
    <section id="participant-item">
      <h3>{fullName}</h3>
      <span>{email}</span>
      <span>{city}</span>
    </section>
  );
}
