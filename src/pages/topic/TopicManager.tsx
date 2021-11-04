//dependencies
import { useHistory, useParams, Link } from "react-router-dom";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import ErrorComponent from "../../components/ErrorComponent";
import { deleteDocument } from "../../firebaseServices/firestore";
import Icon from "../../components/Icon";
import { FormEvent } from "react";
// Interface
type PropParams = {
  id: string;
};
export default function TopicManager() {
  const { topicsData, dispatch } = useTopicsData();
  const { id } = useParams<PropParams>();
  const history = useHistory();
  const topicInfo = topicsData.find((item: iTopic) => item.id === id);
  if (topicInfo === undefined) return ErrorComponent;

  async function onDelete(id: string, e: FormEvent) {
    e.preventDefault();
    if (
      window.confirm(
        "Are you sure you want to delete this topic and all of its contents?"
      )
    ) {
      await deleteDocument("topics", id);
      alert("Topic deleted");
      dispatch({ type: "UPDATE_TOPIC", payload: topicInfo });
      history.goBack();
    }
  }
  return (
    <section id="admin-topic">
      <h3> Topic management</h3>
      <ul>
        <li>
          <Link to={`/admin-topics/${id}/file`}>
            <Icon fileName={"cloud-upload"} />
            Upload resources
          </Link>
        </li>
        <li>
          <Link to={`/admin-topics/${id}/video`}>
            <Icon fileName={"video"} />
            Add video
          </Link>
        </li>
        <li>
          <Link to={`/admin-topics/${id}/link`}>
            <Icon fileName={"link"} />
            Add link
          </Link>
        </li>
        <li>
          <Link to={`/admin-topics/${id}`}>
            <Icon fileName={"edit"} />
            Edit topic
          </Link>
        </li>
        <li>
          <button onClick={(e) => onDelete(id, e)}>
            <Icon fileName={"bin"} />
            Delete topic
          </button>
        </li>
      </ul>
    </section>
  );
}
