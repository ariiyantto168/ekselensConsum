import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import IconImg from "Assets/Images/kategori-icon1.svg";

export default function Index(props) {
  console.log(process.env.REACT_APP_PATH_URL)
  return (
    <Link
      className="btn-kategori"
      to={`/kategori/${props.slug}`}
      onClick={props.handleSetKategori}
    >
      <img src={process.env.REACT_APP_PATH_URL+props.icon} alt="icon image" className="icon-img" />{" "}
      <span>{props.nama}</span>
    </Link>
  );
}
