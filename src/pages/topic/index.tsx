import { useHistory, useParams } from "react-router-dom";
import { getCollection } from "../../firebaseServices/firestore";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import ErrorComponent from "../../components/ErrorComponent";
import { useCallback, useEffect, useState } from "react";
import Type from "../../types/reducerTypes";
import Spinner from "../../components/Spinner";
import { useUserData } from "../../context/UserDataContext";
import AdminTopic from "../adminTopic";
// Interface
type PropParams = {
  id: string;
};
export default function Topic() {
  const { dispatch, topicsData } = useTopicsData();
  const { userData } = useUserData();
  const { id } = useParams<PropParams>();
  const history = useHistory();
  const admin = userData.userRole === "admin";
  //local
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
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
  const [resourcesData, setResourcesData] = useState(resources);
  const [resourcesToShow, setToShow] = useState();

  //Methods
  const fetchResources = useCallback(async (resourcesData) => {
    try {
      const fetchedResources = await getCollection(`topics/${id}/resources`);
      const updatedTopic = await { ...topicInfo, resources: fetchedResources };
      dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchResources(resourcesData);
  }, [fetchResources, id]);

  /*
    function getResources(type: string) {
      if (resourcesToShow === "links") return { Links };
      if (resourcesToShow === "files") return { Files };
      if (resourcesToShow === "videos") return { Videos };
    }*/

  return (
    <main id="topic">
      <img src={topicImageURL} alt={title} />
      <h1>{title}</h1>
      <h3>{owner}</h3>
      <span> {ownerEmail}</span>
      {admin && AdminTopic}
      <p>{fullDescription}</p>
      <section id="topicsList">
        {status === 0 && <Spinner />}
        {status === 1 && <>{"success"}</>}
        {status === 2 && <p>Error 🚨</p>}
      </section>
      <button onClick={() => history.push("/topics")}>Go back</button>
    </main>
  );
}
