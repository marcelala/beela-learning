import YouTube from "react-youtube";
interface iProps {
  videoId: string;
}

export default function Video({ videoId }: iProps) {
  return (
    <main>
      <h1>TEST VIDEO</h1>
      <YouTube
        videoId={videoId}
        className="video"
        containerClassName="player"
      />
    </main>
  );
}
