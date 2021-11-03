import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import PropsResource from "./PropsResource";
import iResource from "../../interfaces/iResource";
import { useState } from "react";

export default function Video({ resource }: PropsResource) {
  //const [youtubeId, setID] = useState(getYouTubeID(resource.url));
  const youtubeId = getYouTubeID(resource.url);
  console.log(resource.url);
  console.log("youtubeId: " + youtubeId);
  return (
    <div id={"video-player"}>
      <YouTube
        videoId={youtubeId || ""}
        className="video"
        containerClassName="player"
      />
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
    </div>
  );
}
