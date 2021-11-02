import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import PropsResource from "./PropsResource";

export default function Video({ resource }: PropsResource) {
  let youtubeId = getYouTubeID(resource.url);

  return (
    <div id={"video-player"}>
      <YouTube
        videoId={youtubeId || "haMOUb3KVSo"}
        className="video"
        containerClassName="player"
      />
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
    </div>
  );
}
