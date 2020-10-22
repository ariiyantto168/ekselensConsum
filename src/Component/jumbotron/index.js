import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

// Images Jumbotron
import ImgJumbotron from "Assets/Images/Jumbotron.png";

export default function index() {
  return (
    <div className="container-fluid hero p-0">
      <img src={ImgJumbotron} alt="" className="img-fluid" />

      <div className="container">
        <div className="konten-hero">
          <h3 className="title-hero">Mulai Bangun Karir Profesional</h3>
          <p>
            Dengan Ekselen.id kembangkan diri anda dan skill untuk yang lebih
            baik
          </p>
          <Link className="btn btn-hero">Mulai Belajar</Link>
        </div>
      </div>
    </div>
  );
}
