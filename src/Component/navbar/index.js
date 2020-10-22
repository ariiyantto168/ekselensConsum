import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setKategori } from "Store/Action/kategoriAction";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { API_URL } from "utils/index";
import axios from "axios";

// Logo
import Logo from "Assets/Images/logo.png";

function Navbar(props) {
  // Modals
  const [show, setShow] = useState(false);
  const [kategoriId, setKategoriId] = useState(0);
  const [komen, setKomen] = useState({
    namecomments: "",
  });

  const [data, setData] = useState([]);

  const postDataToApi = () => {
    axios({
      method: "POST",
      url: API_URL,
      data: komen,
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Method": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "content-type",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res)
      .catch((err) => err);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8001/categories")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    postDataToApi();
  };

  const handleChange = (e) => {
    setKomen({ namecomments: e.target.value });
    // console.log(e.target.value);
  };

  const handleClickKategori = (idSlug) => {
    props.setKategori(idSlug);
  };
  // console.log(kategoriSlug);
  if (props.isMateriPage) {
    return (
      <header className="header">
        <div className="nav-collapse-materi-page">
          <div className="logo-btn">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <h3 className="title-navbar">{props.title}</h3>
          <button className="btn-modal-comment" onClick={handleShow}>
            Beri Rating
          </button>
          <Modal
            title="Beri Rating"
            visible={show}
            onOk={handleClose}
            onCancel={handleClose}
            className="modals-content"
          >
            <label htmlFor="komentar">Beri komentar</label>
            <textarea
              name="komentar"
              id="komentar"
              cols="50"
              rows="2"
              onChange={handleChange}
            >
              {komen.namecomments}
            </textarea>
          </Modal>
        </div>
      </header>
    );
  }
  // console.log(data);
  return (
    <div className="nav-collapse container">
      <div className="logo-btn">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-btn">
        <div className="navbar-btn-item item-btn-toogle">
          <a className="navbar-btn-hover">Course Category</a>
          <ul className="list-kategori-nav">
            {data.map((item, i) => {
              return (
                <li
                  className="list-kategori-nav-item"
                  key={`kategori-nav${item.idcategories}`}
                >
                  <Link
                    className="list-kategori-link"
                    to={`/kategori/${item.slug}`}
                    onClick={() => {
                      props.setKategori(item.idcategories);
                    }}
                  >
                    <img src={item.images} alt="" /> {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-btn-item">
          <Link className="navbar-btn-item" to="/kategori/career-ready-program">
            Career Ready Program
          </Link>
        </div>
        <div className="navbar-btn-item">
          <Link className="navbar-btn-item" to="/about-ekselen">
            About
          </Link>
        </div>
      </div>
      <div className="navbar-search">
        <input type="text" className="search-nav" placeholder="search" />
      </div>
      <div className="navbar-register">
        <Link className="btn-login" to="/login">
          Login
        </Link>
        <Link className="btn-register" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    kategoriAktif: state.kategoriReducer.kategoriAktif,
  };
};

const mapDispatchToProps = {
  setKategori,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
