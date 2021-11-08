import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import PropsResource from "../../types/PropsResource";

export default function Video({ resource }: PropsResource) {
  const youtubeId = getYouTubeID(resource.url);
  return (
    <li id={"video-player"}>
      <YouTube
        videoId={youtubeId || ""}
        className="video"
        containerClassName="player"
      />
      <div className={"text-box"}>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
      </div>
    </li>
  );
}
