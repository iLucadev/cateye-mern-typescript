import React, { HTMLAttributes } from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import "./VideoItem.css";
import { useNavigate } from "react-router";
import * as videoService from "./VideoService";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideoById(id);
    loadVideos();
  };

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="card-title d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            x
          </span>
        </div>
        <p className="card-text">{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer width={"100%"} url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
