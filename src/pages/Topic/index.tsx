import { useHistory, useParams } from "react-router-dom";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import { ErrorComponent } from "../../components/ErrorComponent";
// Interface
type PropParams = {
  id: string;
};
export default function Topic() {
  const { topicsData } = useTopicsData();
  const { id } = useParams<PropParams>();
  const history = useHistory();
  const topicInfo = topicsData.find((item: iTopic) => item.id === id);
  if (topicInfo === undefined) return ErrorComponent;
  const { topicImageURL, title, fullDescription } = topicInfo;
  return (
    <section id="topic">
      <img src={topicImageURL} alt={title} />
      <h1>{title}</h1>
      <p>{fullDescription}</p>
    </section>
  );
}
