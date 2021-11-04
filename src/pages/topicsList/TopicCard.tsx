import iTopic from "../../interfaces/iTopic";
import Icon from "../../components/Icon";
interface iProps {
  topic: iTopic;
}

export default function TopicCard({ topic }: iProps) {
  const { thumbnailURL, title, shortDescription, owner } = topic;
  return (
    <>
      <img src={thumbnailURL} alt="user content" className="card-image" />
      <div className="text-box">
        <h1>{title}</h1>
        <span>by {owner}</span>
        <p>{shortDescription}</p>
        <div className="btn btn-icon">
          <Icon fileName={"plus-circle"} />
          Read more
        </div>
      </div>
    </>
  );
}
