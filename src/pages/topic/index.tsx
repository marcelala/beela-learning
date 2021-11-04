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
import logo from "assets/images/logo/logoNoText.png";
import Icon from "../../components/Icon";
import ResourcesMenu from "./ResourcesMenu";

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
        dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
        console.log(updatedTopic.resources);
        setTopic(updatedTopic);
        //TODO check resources status before changing status so the empty lists don't render
        setStatus(1);
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
    const listSelected = array.filter(
      (item: iResource) => item.type === selectedResource
    );
    setResourcesList(listSelected);
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
        <section id={"author-card"}>
          <h3>Author</h3>
          <img src={logo} alt={"bee"} />
          <h4>{owner}</h4>
          <a
            href={`mailto:${ownerEmail}`}
            target="_blank"
            rel="noreferrer"
            className={"at"}
          >
            <Icon fileName={"letter"} />
          </a>
        </section>
        <section id={"description-card"}>
          <h3>Description</h3>
          <p>{fullDescription}</p>
        </section>
        <section id="resources">
          <h3>Resources</h3>
          <button value="link" onClick={(e) => onChange(e)}>
            Links
          </button>
          <button value="file" onClick={(e) => onChange(e)}>
            Files
          </button>
          <button value="video" onClick={onChange}>
            Videos
          </button>
          {status === 0 && <Spinner />}
          {status === 1 &&
            ResourcesList({ resources: resourcesList, toShow: selectorType })}
          {status === 2 && <p>Error 🚨</p>}
          {status === 4 && (
            <span>There are no resources available for this topic</span>
          )}
        </section>
        <button onClick={() => history.push("/topics")}>Go back</button>
      </main>
      {admin && <Toolbar />}
    </>
  );
}
