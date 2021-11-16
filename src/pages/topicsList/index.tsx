//dependencies

import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//project files
import { getCollection } from "../../firebaseServices/firestore";
import { useTopicsData } from "../../context/TopicsContext";
import { useUserData } from "../../context/UserDataContext";
import Spinner from "../../components/Spinner";
import iTopic from "../../interfaces/iTopic";
import Type from "../../types/reducerTypes";
import Toolbar from "../../components/Toolbar";
import TopicCard from "./TopicCard";
import banner from "assets/images/sections/listBanner.svg";

export default function TopicsList() {
  const { userData } = useUserData();
  const { dispatch, topicsData } = useTopicsData();
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error
  const admin = userData.userRole === "admin";

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
    <li className="topic-card" key={item.id}>
      <Link to={`/topics/${item.id}`}>
        <TopicCard topic={item} />
      </Link>
    </li>
  ));

  return (
    <>
      <section id="topicsList">
        <div className="topicsList-banner">
          <img src={banner} alt={"yellow background with text over it"} />
          <span>Browse our curated content and boost your tech career</span>
        </div>
        {status === 0 && <Spinner />}
        {status === 1 && <ul>{TopicsList}</ul>}
        {status === 2 && <p>Error 🚨</p>}
      </section>
      {admin && <Toolbar />}
    </>
  );
}
