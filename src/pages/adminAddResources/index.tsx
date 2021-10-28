import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import Type from "../../types/reducerTypes";
import { newTopic } from "../../types/newTopic";
import FileForm from "./FileForm";
import VideoForm from "./VideoForm";
import LinkForm from "./LinkForm";
// Interface
type iPropParams = {
  id: string;
  type: string;
};
export default function AdminAddResources() {
  const { topicsData, dispatch } = useTopicsData();
  const { id, type } = useParams<iPropParams>();
  const history = useHistory();
  const [topic, setTopic] = useState(findTopic(topicsData, id));
  const formToShow = getForm(type);
  // Methods
  function findTopic(topicsData: iTopic[], id: string) {
    const existingTopic = topicsData.find((item) => item.id === id);
    return existingTopic === undefined ? newTopic : existingTopic;
  }

  function getForm(type: string) {
    if (type === "upload") return <FileForm topic={topic} />;
    if (type === "video")
      return <VideoForm topic={topic} onChange={onChange} />;
    if (type === "link") return <LinkForm topic={topic} onChange={onChange} />;
  }

  function onChange(key: string, value: string) {
    const field = { [key]: value };
    setTopic({ ...topic, ...field });
  }

  return (
    <section id={"resources"}>
      <h1>Add resources to {topic.title}</h1>
      {formToShow}
      <button onClick={() => history.goBack()}>Go back</button>
    </section>
  );
}
