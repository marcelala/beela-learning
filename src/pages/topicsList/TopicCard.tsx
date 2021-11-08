import iTopic from "../../interfaces/iTopic";
import Icon from "../../components/Icon";
import element from "../../assets/images/card-vector.svg";
interface iProps {
  topic: iTopic;
}

export default function TopicCard({ topic }: iProps) {
  const { thumbnailURL, title, shortDescription, owner } = topic;
  return (
    <>
      <div className={"image-wrapper"}>
        <img src={thumbnailURL} alt="user content" className="card-image" />
      </div>
      <div className="text-box">
        <h1>{title}</h1>
        <span>by {owner}</span>
        <p>{shortDescription}</p>
      </div>
      <div className="btn btn-icon read">
        <Icon fileName={"plus-circle"} />
        Read more
      </div>
      <img src={element} alt="yellow graphic" className={"element-card"} />
    </>
  );
}
