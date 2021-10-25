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
// Interface
type iPropParams = {
  id: string;
};
export default function AdminTopic() {
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

  function onChange(key: string, value: string) {
    const field = { [key]: value };
    setTopic({ ...topic, ...field });
  }

  function onSave(topic: iTopic) {
    id === "newTopic" ? onCreateTopic(topic) : onUpdateTopic(topic);
    history.goBack();
  }

  async function onCreateTopic(topic: iTopic) {
    const documentID = await createDocument("topics", topic);
    topic.id = await documentID;
    await updateDocument("topics", topic);
    setTopic({ ...topic, id });
    console.log(topic.id, documentID, "topiciD on create");
    dispatch({ type: Type.CREATE_TOPIC, payload: topic });
    console.log(topic.id, "id after dispatch");
  }

  async function onUpdateTopic(topic: iTopic) {
    await updateDocument("topics", topic);
    dispatch({ type: Type.UPDATE_TOPIC, payload: topic });
  }

  return (
    <section id="topic-editor">
      <h1>{title}</h1>
      <TopicForm topic={topic} onChange={onChange} />
      <footer>
        <button onClick={() => onSave(topic)}>Save changes</button>
        <button onClick={() => history.goBack()}>Go back</button>
      </footer>
    </section>
  );
}
