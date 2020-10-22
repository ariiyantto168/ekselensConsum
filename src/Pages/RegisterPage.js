import React, { Component } from "react";
import Layout from "Component/layout/index";
import Logo from "Assets/Images/logo.png";

export default class RegisterPage extends Component {
  render() {
    return (
      <Layout isLoginPage>
        <div className="section-login-register">
          <div className="card-login">
            <div className="row row-login">
              <div className="col-5">
                <div className="side-backdrop">
                  <h5>
                    Tingkatkan <span>kemampuan</span> dan
                    <span>wawasan</span> dengan <span>Ekselen</span>
                  </h5>
                  <img src={Logo} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="login-konten">
                  <div className="row justify-content-center mb-2">
                    <div className="col-3">
                      <button className="btn btn-login" type="button">
                        Masuk
                      </button>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-login" type="button">
                        Daftar
                      </button>
                    </div>
                  </div>
                  <div className="form-register">
                    <form>
                      <div className="form-group">
                        <label for="email">Nama Lengkap</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password">Kata Sandi</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Kata Sandi"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password">Konfirmasi Kata Sandi</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Konfimasi Kata Sandi"
                        />
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label for="" className="form-check-label">
                          Saya ingin menerima berita terbaru tentang Ekselen
                        </label>
                      </div>
                    </form>
                  </div>
                  <button className="btn btn-login-submit">Daftar</button>
                  {/* <p className="text-center my-1" style={{ fontSize: "12px" }}>
                    Atau masuk dengan
                  </p>
                  <div className="row justify-content-center mb-2">
                    <div className="col">
                      <button className="btn btn-login-facebook">
                        Facebook
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-login-google">Google</button>
                    </div>
                  </div> */}
                  <p
                    className="text-center"
                    style={{ fontSize: "12px", fontWeight: "300", margin: 0 }}
                  >
                    Belum memiliki akun? Silahkan
                    <button
                      className="btn"
                      type="button"
                      style={{
                        fontSize: "12px",
                        borderBottom: "1px solid #2f3c80",
                        borderRadius: 0,
                        padding: 0,
                      }}
                    >
                      daftar
                    </button>
                    terlebih dahulu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
