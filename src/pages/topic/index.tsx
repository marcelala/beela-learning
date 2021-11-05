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
import iResource from "../../interfaces/iResource";
import Toolbar from "../../components/Toolbar";
import Header from "../../components/Header";
import ResourcesSelector from "./ResourcesSelector";
import AuthorCard from "./AuthorCard";

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
  const { topicImageURL, title, fullDescription, owner, ownerEmail } =
    topicInfo;
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
  const [topic, setTopic] = useState(topicInfo);
  const [selectorType, setSelector] = useState("link");
  const [resourcesList, setResourcesList] = useState(topic.resources);

  //Methods
  const fetchResources = useCallback(async () => {
    try {
      const fetchedResources = await getCollection(`topics/${id}/resources`);
      if (fetchedResources.length > 0) {
        const updatedTopic = { ...topic, resources: fetchedResources };
        setTopic(updatedTopic);
        setStatus(1);
        dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
      } else {
        setStatus(4);
      }
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchResources();
  }, [fetchResources, id]);

  function getResourcesSelected(array: iResource[], selectedResource: string) {
    selectedResource;
    const listSelected = array.filter(
      (item: iResource) => item.type === selectedResource
    );
    listSelected ? setResourcesList(listSelected) : array;
    return listSelected;
  }

  function onChange(e: any) {
    setSelector(e.target.value);
    getResourcesSelected(topic.resources, e.target.value);
  }

  return (
    <>
      <Header id={"header-topic"} />
      <main id="topic">
        <img src={topicImageURL} alt={title} className={"sectionImg"} />
        <h1>{title}</h1>
        {admin && <>{TopicManager()}</>}
        <div className={"grid"}>
          <AuthorCard owner={owner} ownerEmail={ownerEmail} />
          <section id={"description-card"}>
            <h3>Description</h3>
            <p>{fullDescription}</p>
          </section>
          <section id="resources">
            <h3>Resources</h3>
            <ResourcesSelector
              handleClick={(e) => onChange(e)}
              onClickVideo={onChange}
            />
            {status === 0 && <Spinner />}
            {status === 1 &&
              ResourcesList({ resources: resourcesList, toShow: selectorType })}
            {status === 2 && <p>Error 🚨</p>}
            {status === 4 && (
              <span>There are no resources available for this topic</span>
            )}
          </section>
          {admin && <>{TopicManager()}</>}
        </div>
        <button onClick={() => history.push("/topics")} className="btn-primary">
          Go back
        </button>
      </main>
      {admin && <Toolbar />}
    </>
  );
}
