import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import iUser from "../interfaces/iUser";
// Interface
interface iProps {
  item: iUser;
}
export default function Participant(item: iProps) {
  // @ts-ignore
  const { fullName, email, city, iud } = item;
  if (item === undefined) return <ErrorComponent key={iud.index} />;
  return (
    <section id="participant-item">
      <h3>{fullName}</h3>
      <span>{email}</span>
      <span>{city}</span>
    </section>
  );
}
