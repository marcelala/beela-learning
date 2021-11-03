import { useTopicsData } from "../../context/TopicsContext";
import { useHistory, useParams } from "react-router-dom";
import iTopic from "../../interfaces/iTopic";
import { newTopic } from "../../types/newTopic";
import { useState } from "react";
import {
  createDocument,
  updateDocument,
} from "../../firebaseServices/firestore";
import Type from "../../types/reducerTypes";
import TopicForm from "./TopicForm.jsx";
import Toolbar from "../../components/Toolbar";
// Interface
type iPropParams = {
  id: string;
};
export default function AdminTopicEditor() {
  const { topicsData, dispatch } = useTopicsData();
  const { id } = useParams<iPropParams>();
  const history = useHistory();
  const [topic, setTopic] = useState(findTopic(topicsData, id));
  // Properties
  const title = topic.title === "" ? "Create topic" : "Edit topic";
  // Methods
  function findTopic(topicsData: iTopic[], id: string) {
    const existingTopic = topicsData.find((item) => item.id === id);
    return existingTopic === undefined ? newTopic : existingTopic;
  }

  async function onChange(key: string, value: string) {
    const field = { [key]: value };
    setTopic({ ...topic, ...field });
  }

  async function onSave(topic: iTopic) {
    id === "newTopic" ? await onCreateTopic(topic) : await onUpdateTopic(topic);
    history.goBack();
  }

  async function onCreateTopic(topic: iTopic) {
    const documentID = await createDocument("topics", topic);
    topic.id = await documentID;
    await updateDocument("topics", topic);
    setTopic({ ...topic, id });
    dispatch({ type: Type.CREATE_TOPIC, payload: topic });
  }

  async function onUpdateTopic(topic: iTopic) {
    await updateDocument("topics", topic);
    dispatch({ type: Type.UPDATE_TOPIC, payload: topic });
  }

  return (
    <>
      <section id="topic-editor">
        <h1>{title}</h1>
        <TopicForm topic={topic} onChange={onChange} />
        <button onClick={() => onSave(topic)}>Save changes</button>
        <button onClick={() => history.goBack()}>Go back</button>
      </section>
      <Toolbar />
    </>
  );
}
