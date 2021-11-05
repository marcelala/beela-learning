import Icon from "../../components/Icon";
import PropsResource from "../../types/PropsResource";

export default function ResourceCard({ resource }: PropsResource) {
  const { type, title, description } = resource;

  return (
    <li id={"resource"}>
      <div className="image-box">
        <Icon fileName={type || "link"} />
      </div>
      <div className="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
