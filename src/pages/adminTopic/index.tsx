//dependencies
import { FormEvent } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useTopicsData } from "../../context/TopicsContext";
import iTopic from "../../interfaces/iTopic";
import ErrorComponent from "../../components/ErrorComponent";
import iUser from "../../interfaces/iUser";
import { deleteDocument } from "../../firebaseServices/firestore";
import Icon from "../../components/Icon";
// Interface
type PropParams = {
  id: string;
};
export default function AdminTopic() {
  const { topicsData, dispatch } = useTopicsData();
  const { id } = useParams<PropParams>();
  const history = useHistory();
  const topicInfo = topicsData.find((item: iTopic) => item.id === id);
  if (topicInfo === undefined) return ErrorComponent;
  const { topicImageURL, title, fullDescription, owner } = topicInfo;

  async function onDelete(id: string) {
    //e.preventDefault();
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
    <section id="topic">
      <img src={topicImageURL} alt={title} />
      <h1>{title}</h1>
      <h3>{owner}</h3>
      <p>{fullDescription}</p>
      <Link to={`/admin-topics/${id}`}>
        <Icon fileName={"edit"} />
        Edit topic
      </Link>
      <button onClick={() => onDelete(id)}>
        <Icon fileName={"bin"} />
        Delete topic
      </button>
      <button onClick={() => history.goBack()}>Go back</button>
    </section>
  );
}
