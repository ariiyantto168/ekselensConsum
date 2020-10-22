import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Carousel } from "antd";
import Card from "Component/card";

export default function ListRekomendasiDetailKelas(props) {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title-detail-kelas">
          Rekomendasi <span>Kelas</span>
        </h3>
        <div className="border-title" />
        <Carousel slidesToScroll={1} slidesToShow={4} autoplay dots={false}>
          {props.data.map((item, i) => {
            return (
              <Card
                key={`kelas-${i}`}
                judul={item.judul}
                instrukturPhoto={item.instruktur.photo}
                instrukturNama={item.instruktur.nama}
                instrukturRole={item.instruktur.role}
                rate={item.rate}
                jumMateri={item.totalMateri}
                jumJam={item.totalJam}
                harga={item.harga}
                diskon={item.diskon}
                benefit={item.benefit}
                cover={item.imgCover}
                kategori={item.kategori}
                slug={item.slug}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
