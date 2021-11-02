import Icon from "../../components/Icon";
import PropsResource from "./PropsResource";

export default function ResourceCard({ resource }: PropsResource) {
  const { url, type, title, description } = resource;

  return (
    <div id={"resource"}>
      <a href={url} target="_blank" rel="noreferrer">
        <Icon fileName={type || "link"} />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
