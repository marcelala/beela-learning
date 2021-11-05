import ErrorComponent from "./ErrorComponent";
import PropsUser from "../types/PropsUser";

export default function Participant({ user }: PropsUser) {
  const { fullName, email, city } = user;
  if (user === undefined) return <ErrorComponent />;
  return (
    <div id="participant-item">
      <h3>{fullName}</h3>
      <small>{email}</small>
      <small>{city}</small>
    </div>
  );
}
