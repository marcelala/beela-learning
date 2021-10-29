import { useHistory, useParams } from "react-router-dom";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import ErrorComponent from "../../components/ErrorComponent";
import YouTube from "react-youtube";
import { useState } from "react";
// Interface
type PropParams = {
  id: string;
};
export default function Topic() {
  const { dispatch, topicsData } = useTopicsData();
  const { id } = useParams<PropParams>();
  const history = useHistory();
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
  //const [resourcesToShow, setToShow] = useState("links");
  const topicInfo = topicsData.find((item: iTopic) => item.id === id);
  if (topicInfo === undefined) return ErrorComponent;
  const { topicImageURL, title, fullDescription, owner, resources } = topicInfo;

  /* Methods
  const fetchTopics = useCallback(async (resourcesToShow: string) => {
    try {
      const fetchedResources = await getCollection(
        `topics/${id}/${resourcesToShow}`
      );
      const updatedTopic = await { ...topicInfo, fetchedResources };
      dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
      console.log(topicInfo, "info");
      console.log(updatedTopic, "updated");

      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchTopics(resourcesToShow);
    console.log(topicsData);
  }, [fetchTopics]);

  function getResources(type: string) {
    if (resourcesToShow === "links") return { Links };
    if (resourcesToShow === "files") return { Files };
    if (resourcesToShow === "videos") return { Videos };
  }*/

  return (
    <section id="topic">
      <img src={topicImageURL} alt={title} />
      <h1>{title}</h1>
      <h3>{owner}</h3>
      <p>{fullDescription}</p>

      <button onClick={() => history.push("/topics")}>Go back</button>
    </section>
  );
}
