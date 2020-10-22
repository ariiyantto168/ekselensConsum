import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Progress from "react-progressbar";

// Image
import ImgCard from "Assets/Images/img-card-progress.png";
import VideoIcong from "Assets/Images/video-icon.svg";
import ListMateriIcon from "Assets/Images/list-materi-icon.svg";

export default function CardProgressKelas(props) {
  const { data } = props;
  return (
    <div className="card-progress">
      <div className="img-card-progress">
        <img src={ImgCard} alt="" />
      </div>
      <div className="konten-card-progress">
        <h4 className="title-card-progress">{data.judul}</h4>
        <div className="progress-bar-item">
          <Progress completed={data.progress} />
          <h5>{`${data.progress}%`}</h5>
        </div>
        <div className="konten-card-progress-info">
          <div className="kontent-card-progress-info-item">
            <img src={VideoIcong} alt="" />
            <h5>{`1/${data.totalVideo} Video Selesai`}</h5>
          </div>
          <div className="kontent-card-progress-info-item">
            <img src={ListMateriIcon} alt="" />
            <h5>{`3/${data.totalKuis} Kuis Selesai`}</h5>
          </div>
          <div className="btn-progress">
            <Link
              to={`/materi/${data.slug}/${data.bab[0].materi[0].slugMateriKelas}`}
              className="btn-progress-item"
            >
              Lanjut Kelas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
