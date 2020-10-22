import React from "react";
import "./index.scss";
import ListMateri from "Component/listMateri/ListMateri";

// Data
import Dummy from "JSON/dummy.json";

// Image
import ImgProfilReview from "Assets/Images/review-img.png";
import BenefitCard1 from "Assets/Images/benefit-detail-card1.png";
import BenefitCard2 from "Assets/Images/benefit-detail-card2.png";

export default function index({ komen, deskripsi, deskInstruktur }) {
  return (
    <div className="section">
      <div className="container konten-detail-kelas">
        <div className="row">
          <div className="col">
            <div className="detail-kelas">
              <h3 className="title-detail-kelas">Deskripsi</h3>
              <div className="border-title"></div>
              <p className="deskripsi-kelas">{deskripsi}</p>
              <h3 className="title-detail-kelas">
                Tentang <span>Tutor</span>
              </h3>
              <div className="border-title"></div>
              <p className="deskripsi-kelas">{deskInstruktur}</p>
              <div className="list-materi-kelas">
                <h3 className="title-detail-kelas">
                  Materi <span>Kelas</span>
                </h3>
                <div className="border-title"></div>
                <ListMateri data={Dummy.materi} />
              </div>
              <div className="review-kelas">
                <h3 className="title-detail-kelas">
                  Review <span>Kelas</span>
                </h3>
                <div className="border-title"></div>
                {komen.map((item, i) => {
                  return (
                    <div
                      className="row align-items-center"
                      key={`comments-${item.idComments}`}
                    >
                      <div className="col-3 profil-review-kelas">
                        <img
                          src={ImgProfilReview}
                          alt=""
                          className="img-review-kelas"
                        />
                        <div className="profil-info-review-kelas">
                          <h5>Jane Doe</h5>
                          <p>1 Juli 2020</p>
                        </div>
                      </div>
                      <div className="col review-testimoni">
                        <p>{item.namecomments}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card-detail-kelas">
              <div className="benefit-card-info">
                <h5 className="card-title">
                  Yang kamu dapat saat mengikuti kelas ini
                </h5>
                <div className="benefit-icon">
                  <img src={BenefitCard1} alt="" />
                  <p>Sertifikat</p>
                </div>
                <div className="benefit-icon">
                  <img src={BenefitCard2} alt="" />
                  <p>Akses Kelas Selamanya</p>
                </div>
              </div>
              <div className="benefit-card-price">
                <div className="card-price">
                  <h5>Rp 500.000,-</h5>
                  <h5>Rp 250.000,-</h5>
                </div>
                <button className="btn btn-card-beli-kelas" type="button">
                  Beli Kelas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
