import React from "react";
import "./index.scss";

import ImgPromo from "Assets/Images/promosi.png";

export default function index() {
  return (
    <div className="section">
      <div className="container">
        <div className="promosi-banner">
          <img src={ImgPromo} className="promosi-img" alt="" />
          <h3 className="promosi-konten">
            Tingkatkan keahlianmu bersama <span>Ekselen.id</span> Dapatkan
            <span>kelas yang dapat diakses seterusnya</span> ,
            <span>Materi</span> update dengan
            <span>instruktur terbaik</span> serta dapatkan
            <span>Sertifikat Pelatihan</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
