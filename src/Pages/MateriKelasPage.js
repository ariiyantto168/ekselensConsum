import React, { useState, useRef } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Navbar from "Component/navbar";
import SideBar from "Component/sidebarMateriKelas/Index";
import { connect } from "react-redux";
import Kuis from "Component/kuis/Kuis";
import { setTypeMateri } from "Store/Action/materiAction";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

// Icon
import { FaPlay, FaPause } from "react-icons/fa";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

// Data
import DataKelas from "JSON/kelasSaya.json";
const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

function MateriKelasPage(props) {
  const [typeMateri, setTypeMateri] = useState("");

  const [state, setState] = useState({
    play: false,
    muted: false,
    screen: true,
    volume: 1,
    played: 0,
    seeking: false,
  });
  const { slugKelas, slugMateri } = useParams();
  const { slugMateriKelas, type } = props;
  const playerContainerRef = useRef();
  const playRef = useRef();

  const Data = Object.assign({}, ...DataKelas.kelas);

  // Funcntion
  const getVideo = (slugK) => {
    // const videoTemp = {};
    for (let i = 0; i < Data.bab.length; i++) {
      for (let j = 0; j < Data.bab[i].materi.length; j++) {
        if (slugK === Data.bab[i].materi[j].slugMateriKelas) {
          return { ...Data.bab[i].materi[j] };
        }
      }
    }
  };
  const activeSlug = () => {
    if (slugMateriKelas === "") {
      return slugMateri;
    } else {
      return slugMateriKelas;
    }
  };
  const videoTemp = getVideo(activeSlug());
  // setTypeMateri(type);

  const handleType = () => {
    return type;
  };
  // Function video controller

  const handlePlay = () => {
    setState({ ...state, play: !state.play });
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolume = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(e.target.value / 100),
      muted: e.target.value == 0 ? true : false,
    });
    // console.log(muted);
  };
  const handleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
    setState({ ...state, screen: !screen });
  };
  const handleProgress = (changeState) => {
    console.log(changeState);
    setState({ ...state, ...changeState });
  };
  const handleSeek = (e) => {
    setState({
      ...state,
      played: parseFloat(e.target.value / 100),
    });
  };

  const handleMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleMouseUp = (e) => {
    setState({ ...state, seeking: false });
    playRef.current.seekTo(e.target.value / 100, "fraction");
  };

  const currentTime =
    playRef && playRef.current ? playRef.current.getCurrentTime() : "00:00";

  const duration =
    playRef && playRef.current ? playRef.current.getDuration() : "00:00";

  const totalDuration = format(duration);

  // Distructure State
  const { play, muted, screen, volume, played } = state;
  // console.log(elapsedTime);
  return (
    <div className="materi-kelas">
      <Navbar isMateriPage title={Data.judul} />
      <div className="materi-kelas-konten">
        <SideBar data={Data} />
        <div className="konten-materi-kelas">
          <Switch>
            <Route path={`/materi/${slugKelas}/${activeSlug()}`}>
              {/* <h1>{slugMateri}</h1> */}
              {/* <video src={videoTemp.video} controls /> */}
              {handleType() === "kuis" ? (
                <Kuis data={videoTemp.kuis} />
              ) : (
                <div className="video-wrapper" ref={playerContainerRef}>
                  <ReactPlayer
                    ref={playRef}
                    url={videoTemp.video}
                    playing={play}
                    width="100%"
                    height="100%"
                    wrapper="wrapper"
                    muted={muted}
                    volume={volume}
                    onProgress={handleProgress}
                  />
                  <div className="controller-video">
                    {/* Play Control */}
                    <div className="playPauseButton">
                      <div className="btn-playPause" onClick={handlePlay}>
                        {play ? <FaPause /> : <FaPlay />}
                      </div>
                    </div>
                    {/* Control bar */}
                    <div className="control-bar">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        className="progress-video"
                        value={played * 100}
                        onChange={handleSeek}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                      />
                      <div className="control-bar-video">
                        <div className="left-control">
                          <div
                            className="btn-control-play"
                            onClick={handlePlay}
                          >
                            {play ? <FaPause /> : <FaPlay />}
                          </div>
                          <p>
                            {format(currentTime)} / {totalDuration}
                          </p>
                          <div
                            className="btn-control-volume"
                            onClick={handleMute}
                          >
                            {muted ? <HiVolumeOff /> : <HiVolumeUp />}
                          </div>
                          <input
                            type="range"
                            min={0}
                            max={100}
                            value={muted ? 0 : volume * 100}
                            onChange={handleVolume}
                            className="input-volume"
                          />
                        </div>
                        <div className="right-control">
                          <div
                            className="btn-control-fullscreen"
                            onClick={handleFullScreen}
                          >
                            {screen ? <BsFullscreen /> : <BsFullscreenExit />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    slugMateriKelas: state.materiReducer.slugMateriKelas,
    type: state.materiReducer.type,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MateriKelasPage);
