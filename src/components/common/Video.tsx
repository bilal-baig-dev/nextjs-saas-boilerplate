import React from "react";

type Props = {
  videoId: string;
};
const Video = ({ videoId }: Props) => {
  return (
    <div className="flex w-full h-full aspect-video overflow-hidden sm:rounded-lg">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
