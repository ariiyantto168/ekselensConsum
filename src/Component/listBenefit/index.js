import React from "react";
import "./index.scss";

// Image
import ImgBenefit1 from "Assets/Images/benefit1.png";
import ImgBenefit2 from "Assets/Images/benefit2.png";
import ImgBenefit3 from "Assets/Images/benefit3.png";

export default function index() {
  return (
    <div className="section">
      <div className="container list-benefit">
        <h2 className="title">
          Bangun Karir Bersama <span>Ekselen.id</span>
        </h2>
        <div className="row justify-content-between">
          <div className="col-6">
            <div className="konten-benefit">
              <h3 className="konten-judul">Beragam Konten Pilihan</h3>
              <p className="konten-isi">
                Temukan <span>beragam pilihan konten</span> dan topik pelatihan
                serta <span>pembelajaran terbaik</span> , yang diajarkan oleh
                berbagai Lembaga serta <span>Trainer yang profesional</span>
              </p>
            </div>
          </div>
          <div className="col-5">
            <div className="konten-gambar">
              <img src={ImgBenefit1} alt="benefit 1" />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-5">
            <div className="konten-gambar">
              <img src={ImgBenefit2} alt="benefit 1" />
            </div>
          </div>
          <div className="col-6">
            <div className="konten-benefit">
              <h3 className="konten-judul">Pelatihan Bersertifikat</h3>
              <p className="konten-isi">
                <span>Tersedia sertifikat</span> bagi Anda yang telah
                menyelesaikan pelatihan yang dapat diakses dengan mudah dan
                dapat digunakan sesuai kebutuhan Anda
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-6">
            <div className="konten-benefit">
              <h3 className="konten-judul">Career Ready Program</h3>
              <p className="konten-isi">
                Dapatkan akses <span>materi pelatihan yang sesuai</span> dengan
                kebutuhan dunia kerja saat ini untuk mendukung karir impian Anda
              </p>
            </div>
          </div>
          <div className="col-5">
            <div className="konten-gambar">
              <img src={ImgBenefit3} alt="benefit 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
