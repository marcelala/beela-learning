import { useHistory, useParams } from "react-router-dom";
import { getCollection } from "../../firebaseServices/firestore";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import ErrorComponent from "../../components/ErrorComponent";
import { useCallback, useEffect, useState } from "react";
import Type from "../../types/reducerTypes";
import Spinner from "../../components/Spinner";
import { useUserData } from "../../context/UserDataContext";
import TopicManager from "./TopicManager";
import { ResourcesList } from "./ResourcesList";
// Interface
type PropParams = {
  type: string;
  id: string;
};
export default function Topic() {
  const { dispatch, topicsData } = useTopicsData();
  const { userData } = useUserData();
  const { id, type } = useParams<PropParams>();
  const history = useHistory();
  const admin = userData.userRole === "admin";
  //local
  const topicInfo = topicsData.find((item: iTopic) => item.id === id);
  if (topicInfo === undefined) return ErrorComponent;
  const {
    topicImageURL,
    title,
    fullDescription,
    owner,
    resources,
    ownerEmail,
  } = topicInfo;
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
  const [topic, setTopic] = useState(topicInfo);

  const [resourcesToShow, setToShow] = useState("link");

  //Methods
  const fetchResources = useCallback(async () => {
    try {
      const fetchedResources = await getCollection(`topics/${id}/resources`);
      const updatedTopic = { ...topic, resources: fetchedResources };
      dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
      console.log(updatedTopic.resources);
      setTopic(updatedTopic);
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchResources();
  }, [fetchResources, id]);
  return (
    <main id="topic">
      <img src={topicImageURL} alt={title} />
      <h1>{title}</h1>
      {admin && <>{TopicManager()}</>}
      <section id={"author-card"}>
        <h3>{owner}</h3>
        <span> {ownerEmail}</span>
      </section>
      <section id={"description-card"}>
        <h3>Description</h3>
        <p>{fullDescription}</p>
      </section>
      <section id="resourcesList">
        <h3>Resources</h3>
        <button onClick={() => setToShow("link")}>Links</button>
        <button onClick={() => setToShow("file")}>Files</button>
        <button onClick={() => setToShow("video")}>Videos</button>
        {status === 0 && <Spinner />}
        {status === 1 && (
          <ResourcesList resources={topic.resources} toShow={resourcesToShow} />
        )}
        {status === 2 && <p>Error 🚨</p>}
      </section>
      <button onClick={() => history.push("/topics")}>Go back</button>
    </main>
  );
}
