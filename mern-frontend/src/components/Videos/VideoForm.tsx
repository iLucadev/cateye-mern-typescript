import React, { ChangeEvent, FormEvent, useState } from "react";
import * as videoService from "./VideoService";
import { Video } from "./Video";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await videoService.createVideo(video);
    toast.success("New video added");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center mb-3">New Video</h3>
            <form onSubmit={() => handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="write a title"
                  className="form-control"
                  autoFocus
                  onChange={() => handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://some-url.example"
                  className="form-control"
                  onChange={() => handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="write a description"
                  onChange={() => handleInputChange}
                ></textarea>
              </div>
              <button className="btn btn-primary">Create video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
