import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";

// Image Card
import StackLessonIcon from "Assets/Images/icon-card-kelas.png";
import ClockIcon from "Assets/Images/icon2-card-kelas.png";

export default function Index(props) {
  const dispatch = useDispatch();
  const setSlugKelas = (slugKelas, idclass) => {
    dispatch({
      type: "SET_SLUG_KELAS",
      payload: slugKelas,
    });
    dispatch({
      type: "SET_ID_CLASS",
      payload: idclass,
    });
  };
  return (
    <div className="card card-product">
      <img className="card-img-top" src={process.env.REACT_APP_PATH_URL+props.cover} alt="Card image cap" />
      <div className="card-body">
        <h4 className="kategori-kelas text-capitalize">{props.kategori}</h4>
        <div className="judul-kelas">{props.judul}</div>
        <div className="instruktur-kelas-card">
          <img
            src={props.instrukturPhoto}
            alt="instruktur"
            className="foto-profil-card"
          />
          <div className="instruktur-kelas">
            <div className="nama-instruktur-kelas">{props.instrukturNama}</div>
            <p className="pekerjaan-instruktur-kelas">{props.instrukturRole}</p>
          </div>
        </div>
        <div className="rating-kelas">
          <div className="star-kelas">
            <StarRatings
              numberOfStars={5}
              rating={props.rate}
              starRatedColor="#FFCC47"
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
          <p className="nilai-kelas">{props.rate}</p>
        </div>
        <hr />
        <div className="info-detail-kelas">
          <div className=" info-detail-kelas-item">
            <img src={StackLessonIcon} alt="" />
            <span>{props.jumMateri} Lessons</span>
          </div>
          <div className=" info-detail-kelas-item">
            <img src={ClockIcon} alt="" />
            <span>{props.jumJam} Hour</span>
          </div>
        </div>
        <div className="info-harga-kelas justify-content-between">
          <div>
            <h4 className="harga-kelas">{props.harga}</h4>
          </div>
          <div>
            <h4 className="harga-diskon-kelas">{props.diskon}</h4>
          </div>
        </div>
      </div>
      <div className="card-content-hover">
        <div className="card-hover-item">
          <h4 className="title-card-hover">Apa Yang Kamu Pelajari?</h4>
          <ul className="list-card-hover">
            {props.benefit.map((item, i) => {
              return (
                <li className="list-card-hover-item" key={`benefit-${i}`}>
                  {item.namehilights}
                </li>
              );
            })}
          </ul>
          <div className="component-button-card-hover">
            <Link
              className="btn-lihat-detail"
              to={`/kelas-detail/${props.slug}`}
              // to="/kelas-detail/example"
              onClick={() => setSlugKelas(props.slug, props.id)}
            >
              Lihat Detail
            </Link>
            <div className="button-card-hover">
              <Link className="mulai-belajar">Mulai Belajar</Link>
              <Link className="wishlist-btn">
                {" "}
                <AiFillHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
