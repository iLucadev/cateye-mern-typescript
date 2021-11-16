import React, { useEffect, useState } from "react";
import * as VideoService from "./VideoService";
import { Video } from "./Video";
import VideoItem from "./VideoItem";

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await VideoService.getVideos();
    setVideos(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
};

export default Videos;
