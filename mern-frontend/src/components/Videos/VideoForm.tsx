import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as videoService from "./VideoService";
import { toast } from "react-toastify";
import { Video } from "./Video";
import { useNavigate, useParams } from "react-router-dom";
import { title } from "process";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const navigate = useNavigate();
  const params = useParams() as {
    id: string;
  };

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoService.createVideo(video);
      toast.success("New video added");
    }
    await videoService.updateVideo(params.id, video);

    //setVideo(initialState);
    navigate("/");
  };

  const getVideo = async (id: string) => {
    const res = await videoService.getVideoById(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center mb-3">New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="write a title"
                  className="form-control"
                  value={video.title}
                  autoFocus
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://some-url.example"
                  className="form-control"
                  value={video.url}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="write a description"
                  value={video.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-info">Update video</button>
              ) : (
                <button className="btn btn-primary">Create video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
