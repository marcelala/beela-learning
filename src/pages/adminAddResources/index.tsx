import { FormEvent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import Type from "../../types/reducerTypes";
import { newTopic } from "../../types/newTopic";
import ResourceForm from "./ResourceForm";
import { createDocument } from "../../firebaseServices/firestore";
import { newResource } from "../../types/newResource";
import iResource from "../../interfaces/iResource";
// Interface
type iPropParams = {
  id: string;
  type: string;
};
//TODO: refactor all of these into resourceItem to avoid repeating code
export default function AdminAddResources() {
  const { topicsData, dispatch } = useTopicsData();
  const { id, type } = useParams<iPropParams>();
  const history = useHistory();
  const [topic, setTopic] = useState(findTopic(topicsData, id));
  const [resource, setResource] = useState(newResource);
  // Methods

  function findTopic(topicsData: iTopic[], id: string) {
    const existingTopic = topicsData.find((item) => item.id === id);
    return existingTopic === undefined ? newTopic : existingTopic;
  }
  function onChange(key: string, value: string) {
    const field = { [key]: value };
    setResource({ ...resource, type: type, ...field });
    setTopic({
      ...topic,
      resources: { ...topic.resources, ...resource },
    });
  }

  async function onSave(topic: iTopic, resource: iResource, e: FormEvent) {
    e.preventDefault();
    const documentID = await createDocument(`topics/${id}/resources`, resource);
    dispatch({ type: Type.UPDATE_TOPIC, payload: topic });
    (await documentID)
      ? alert("File added successfully")
      : alert(" Yikes, there was a problem adding this file");
    history.goBack();
  }

  return (
    <section id={"resources"}>
      <h1>Add resources to {topic.title}</h1>
      <form onSubmit={(e) => onSave(topic, resource, e)}>
        <ResourceForm
          onChange={onChange}
          type={type}
          topic={topic}
          resource={resource}
        />
        <button type={"submit"}>Save</button>
      </form>
      <button onClick={() => history.push("/topics")}>Go back</button>
    </section>
  );
}
