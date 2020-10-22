import React from "react";
import "./index.scss";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";

// Image
import ImgInstruktur from "Assets/Images/instruktur-profile-hero-detail.png";
import VideoOverview from "Assets/Images/video-overview.png";
import videoDemo from "Assets/Images/5.mp4";

export default function index(props) {
  console.log(props.demo);
  return (
    <div className="section hero-detail">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
        <div className="row justify-content-between">
          <div className="col">
            <div className="konten-hero-detail">
              <h3>{props.judul}</h3>
              <p>
                Tingkatkan potensi penjualan dengan User Interface yang lebih
                menarik user.
              </p>
              <div className="row rating-kelas">
                <div className="col-3 star-kelas">
                  <StarRatings
                    numberOfStars={5}
                    rating={props.rate}
                    starRatedColor="#FFCC47"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </div>
                <div className="col">
                  <h5>{props.kategori}</h5>
                </div>
              </div>
              <div className="row instruktur-profil-detail-hero ">
                <div className="col-1 pr-0 mr-5">
                  <img
                    src={props.instrukturImg}
                    alt=""
                    className="instruktur-profil-detail-hero-img"
                  />
                </div>
                <div
                  className="col justify-content-center d-flex pl-0"
                  style={{ flexDirection: "column" }}
                >
                  <h4>{props.instrukturName}</h4>
                  <p>{props.instrukturRole}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <ReactPlayer
              url={process.env.REACT_APP_PATH_VIDEO+props.demo}
              width="360px"
              height="205px"
              wrapper="wrapperVid"
              controls
            ></ReactPlayer>
          </div>
        </div>
      </div>
    </div>
  );
}
