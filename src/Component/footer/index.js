import React, { useState } from "react";
import "./index.scss";
import LogoFooter from "Assets/Images/logo.png";

// Icon
import IconFacebook from "Assets/Images/icon-social1.svg";
import IconInstagram from "Assets/Images/icon-social2.svg";
import IconLinkedin from "Assets/Images/icon-social3.svg";

export default function Index() {
  const [isOpen, setIsopen] = useState("");
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-2 logo-footer">
            <img src={LogoFooter} alt="" />
            <p>
              Menara Thamrin Level 3A, #3A09, Jl. M.H. Thamrin No.3, Jakarta
              10250
            </p>
          </div>
          <div className="col-2">
            <div className="konten-footer">
              <h4>Tentang</h4>
              <ul>
                <li>
                  <button className="btn" type="button">
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button className="btn" type="button">
                    Kontak Kami
                  </button>
                </li>
                <li>
                  <button className="btn" type="button">
                    Bantuan
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="konten-footer">
              <h4>Ikuti Kami</h4>
              <ul>
                <li>
                  <button className="btn" type="button">
                    <img
                      src={IconInstagram}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    Instagram
                  </button>
                </li>
                <li>
                  <button className="btn" type="button">
                    <img
                      src={IconFacebook}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    Facebook
                  </button>
                </li>
                <li>
                  <button className="btn" type="button">
                    <img
                      src={IconLinkedin}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    LinkedIn
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="konten-footer">
              <h4>Lainnya</h4>
              <ul>
                <li>
                  <button className="btn" type="button">
                    Syarat dan Ketentuan
                  </button>
                </li>
                <li>
                  <button className="btn" type="button">
                    Kebijakan
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="copyright-footer text-center">
              <p>© 2020 Ekselen.id. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
