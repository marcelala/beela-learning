import InputFile from "../../components/InputFile";
import iTopic from "../../interfaces/iTopic";
import InputField from "../../components/InputField";
// Interface
interface iProps {
  topic: iTopic;
  onChange: Function;
}
export default function VideoForm({ topic, onChange }: iProps) {
  const fileFields = require("fields/fields-video.json");
  const { videoTitle, videoDescription, videoURL, videoID } = fileFields;
  return (
    <form className="video-form">
      <InputField
        onChange={onChange}
        settings={videoTitle}
        state={videoTitle}
      />
      <InputField
        onChange={onChange}
        settings={videoDescription}
        state={videoDescription}
      />
      <InputField onChange={onChange} settings={videoID} state={videoID} />
      <InputField onChange={onChange} settings={videoURL} state={videoURL} />
    </form>
  );
}
