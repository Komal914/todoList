import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import "./lofiVideoPlayer.css";

const LofiVideoPlayer = () => {
  const { musicOn } = useContext(WorkModeContext);
  return (
    <Fragment>
      {musicOn ? (
        <ReactPlayer
          className="LofiMusicPlayer"
          height="10.8rem"
          width="19rem"
          url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default LofiVideoPlayer;
