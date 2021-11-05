import Icon from "../../components/Icon";
import PropsResource from "../../types/PropsResource";

export default function ResourceCard({ resource }: PropsResource) {
  const { type, title, description } = resource;
  return (
    <li className={"resource"}>
      <Icon fileName={type} />
      <div className="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
