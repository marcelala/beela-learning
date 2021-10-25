import iTopic from "../interfaces/iTopic";
interface iProps {
  topic: iTopic;
}

export default function TopicCard({ topic }: iProps) {
  const { thumbnailURL, title, shortDescription, owner } = topic;
  return (
    <li className="topic-item">
      <img src={thumbnailURL} alt="user content" />
      <div className="text-box">
        <h1>{title}</h1>
        <p>{shortDescription}</p>
      </div>
      <span>{owner}</span>
      <div className="btn btn-secondary">
        <p>Read more</p>
      </div>
    </li>
  );
}
