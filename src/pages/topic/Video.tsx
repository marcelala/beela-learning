import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import PropsResource from "./PropsResource";
import iResource from "../../interfaces/iResource";

export default function Video(resource: iResource) {
  const { title, description, url } = resource;
  let youtubeId = getYouTubeID(url);

  return (
    <div id={"video-player"}>
      <YouTube
        videoId={youtubeId || "haMOUb3KVSo"}
        className="video"
        containerClassName="player"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
