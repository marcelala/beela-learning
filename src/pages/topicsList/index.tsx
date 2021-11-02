import { getCollection } from "../../firebaseServices/firestore";
import { useTopicsData } from "../../context/TopicsContext";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopicCard from "../../components/TopicCard";
import iTopic from "../../interfaces/iTopic";
import Spinner from "../../components/Spinner";
import Type from "../../types/reducerTypes";

export default function TopicsList() {
  const { dispatch, topicsData } = useTopicsData();
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchTopics = useCallback(async (path: string) => {
    try {
      const fetchedTopics = await getCollection(path);
      dispatch({ type: Type.SET_TOPICS, payload: fetchedTopics });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchTopics("topics");
  }, [fetchTopics]);

  const TopicsList = topicsData.map((item: iTopic) => (
    <Link to={`/topics/${item.id}`} key={item.id}>
      <TopicCard topic={item} />
    </Link>
  ));

  return (
    <section id="topicsList">
      {status === 0 && <Spinner />}
      {status === 1 && <>{TopicsList}</>}
      {status === 2 && <p>Error 🚨</p>}
    </section>
  );
}
