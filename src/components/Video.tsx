import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import { useState } from "react";
import iVideo from "../interfaces/iVideo";
interface iProps {
  video: iVideo;
}

export default function Video({ video }: iProps) {
  const [url, setURL] = useState(video.videoURL);
  const youtubeId = getYouTubeID(url);
  if (youtubeId == undefined) return "haMOUb3KVSo";
  return (
    <div id={"video-player"}>
      <h1>{video.videoTitle}</h1>
      <p>{video.videoDescription}</p>
      <YouTube
        videoId={youtubeId}
        className="video"
        containerClassName="player"
      />
    </div>
  );
}
