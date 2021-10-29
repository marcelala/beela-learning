import iTopic from "../../interfaces/iTopic";
import InputField from "../../components/InputField";
import { useTopicsData } from "../../context/TopicsContext";
import { useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";
import { newVideo } from "../../types/newVideo";
import { createDocument } from "../../firebaseServices/firestore";
import Type from "../../types/reducerTypes";
import iVideo from "../../interfaces/iVideo";
// Interface
interface iProps {
  topic: iTopic;
  onChange: Function;
}
export default function VideoForm({ topic, onChange }: iProps) {
  const videoFields = require("fields/fields-video.json");
  const { dispatch } = useTopicsData();
  const history = useHistory();
  const [video, setVideo] = useState(newVideo);
  const [updatedTopic, setUpdatedTopic] = useState(topic);
  const { id, videos } = topic;
  const { videoTitle, videoDescription, videoURL, videoID } = video;

  function handleChange(key: string, value: string) {
    const field = { [key]: value };
    setVideo({ ...video, ...field });
    setUpdatedTopic({
      ...updatedTopic,
      videos: { ...updatedTopic.videos, video },
    });
  }

  async function onSave(topic: iTopic, video: iVideo, e: FormEvent) {
    e.preventDefault();
    const documentID = await createDocument(`topics/${topic.id}/videos`, video);
    await dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
    (await documentID)
      ? alert("Video added successfully")
      : alert(" Yikes, there was a problem adding this video");
    history.push("/topics");
  }

  return (
    <form className="video-form" onSubmit={(e) => onSave(topic, video, e)}>
      <InputField
        onChange={handleChange}
        settings={videoFields.videoTitle}
        state={videoTitle}
      />
      <InputField
        onChange={handleChange}
        settings={videoFields.videoDescription}
        state={videoDescription}
      />
      <InputField
        onChange={handleChange}
        settings={videoFields.videoID}
        state={videoID}
      />
      <InputField
        onChange={handleChange}
        settings={videoFields.videoURL}
        state={videoURL}
      />
      <button type={"submit"}>Save resource</button>
    </form>
  );
}
