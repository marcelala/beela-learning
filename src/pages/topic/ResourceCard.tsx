import Icon from "../../components/Icon";
import PropsResource from "./PropsResource";

export default function ResourceCard({ resource }: PropsResource) {
  const { type, title, description } = resource;

  return (
    <div id={"resource"}>
      <Icon fileName={type || "link"} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
