import Icon from "../../components/Icon";
import PropsResource from "./PropsResource";

export default function ResourceCard({ resource }: PropsResource) {
  const { type, title, description } = resource;

  return (
    <>
      <Icon fileName={type || "link"} />
      <div className="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
