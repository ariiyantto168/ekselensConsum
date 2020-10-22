import React, { useState, useEffect } from "react";
import "./index.scss";
import { Carousel, Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";

// Component
import Card from "Component/card";
import Axios from "axios";

// Image
import instructorPhoto from "Assets/Images/user-testimoni.png";

export default function ListRekomendasi() {
  const [idButton, setIdButton] = useState("populers");
  const [tempData, setTempData] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [rekomendasi, setRekomendasi] = useState([]);
  const [highligh, setHiglight] = useState([]);
  const handleActiveClass = (idBtn) => {
    setIdButton(idBtn);
  };

  const getDatKategori = () => {
    Axios.get(`http://localhost:8001/${idButton}`)
      .then((data) => {
        let dataTemp = data.data;
        setRekomendasi(dataTemp);
        // console.log("2.ini dlu");
      })
      .catch((err) => console.log(err));
  };

  const getDataKelas = async () => {
    await Axios.get("http://localhost:8001/class").then(async (data) => {
      let newData = data.data;
      // let tempData = [];
      // for (let i = 0; i < newData.length; i++) {
      //   if (newData[i].idclass == rekomendasi[i].idclass) {
      //     tempData.push(newData[i]);
      //   }
      // }
      setDataKelas(newData);
      // console.log("3.baru ini");
      Axios.get("http://localhost:8001/hilights")
        .then((data) => {
          setHiglight(data.data);
          // console.log("4.habis itu ini");
        })
        .then(() => console.log(rekomendasi))
        .catch((err) => console.log(err));
    });

    // console.log(rekomendasi);
  };

  useEffect(() => {
    getDatKategori();
    getDataKelas();
    // console.log("1. baru in");
  }, [idButton]);

  const activeClass = (classActive) => {
    return idButton === classActive ? " btn-active" : "";
  };

  let newProduk = [];
  let produk = rekomendasi.map((itemRek) =>
    dataKelas.filter((item) => {
      if (item.idclass == itemRek.idclass) {
        newProduk.push(item);
      }
    })
  );

  // console.log(newProduk);
  return (
    <div className="section">
      <div className="container list-rekomendasi">
        <h2 className="title">
          Rekomendasi <span className="font-weight-bold">Kelas</span>
        </h2>
        <div className="btn-kategori-a">
          <Link
            className={`btn-kategori-item ${activeClass("populers")}`}
            onClick={() => handleActiveClass("populers")}
          >
            Kelas Populer
          </Link>
          <Link
            className={`btn-kategori-item ${activeClass("newclass")}`}
            onClick={() => handleActiveClass("newclass")}
          >
            Kelas Terbaru
          </Link>
          <Link
            className={`btn-kategori-item ${activeClass("careers")}`}
            onClick={() => handleActiveClass("careers")}
          >
            Career Ready Program
          </Link>
        </div>

        <Carousel
          infinite={false}
          slidesToScroll={1}
          slidesToShow={4}
          autoplay
          dots={false}
          className="carouselStyle"
        >
          {newProduk.length == 0 ? (
            <div>Loading</div>
          ) : (
            newProduk.map((item, i) => {
              return (
                <Card
                  key={`kelas-${i}`}
                  judul={item.name}
                  instrukturPhoto={instructorPhoto}
                  instrukturNama={item.instructor}
                  instrukturRole={item.roleinstructor}
                  rate={4}
                  jumMateri={10}
                  jumJam={item.duration}
                  harga={item.price}
                  diskon={"20000"}
                  benefit={highligh.filter(
                    (itemHighligh) => itemHighligh.idclass === item.idclass
                  )}
                  cover={item.images}
                  kategori={"marketing"}
                  slug={item.slug}
                  id={item.idclass}
                />
              );
            })
          )}
        </Carousel>
        {/* <Carousel slidesToScroll={1} slidesToShow={4} autoplay dots={false}>
          {dataKelas.length === 0
            ? data
                .filter((item) => item.kelasPopuler === true)
                .map((itemindex0, i) => {
                  return (
                    <Card
                      key={`kelas-${i}`}
                      judul={itemindex0.judul}
                      instrukturPhoto={itemindex0.instruktur.photo}
                      instrukturNama={itemindex0.instruktur.nama}
                      instrukturRole={itemindex0.instruktur.role}
                      rate={itemindex0.rate}
                      jumMateri={itemindex0.totalMateri}
                      jumJam={itemindex0.totalJam}
                      harga={itemindex0.harga}
                      diskon={itemindex0.diskon}
                      benefit={itemindex0.benefit}
                      cover={itemindex0.imgCover}
                      kategori={itemindex0.kategori}
                      slug={itemindex0.slug}
                    />
                  );
                })
            : dataKelas.map((itemKelas, index) => {
                return (
                  <Card
                    key={`kelas-${index}`}
                    judul={itemKelas.judul}
                    instrukturPhoto={itemKelas.instruktur.photo}
                    instrukturNama={itemKelas.instruktur.nama}
                    instrukturRole={itemKelas.instruktur.role}
                    rate={itemKelas.rate}
                    jumMateri={itemKelas.totalMateri}
                    jumJam={itemKelas.totalJam}
                    harga={itemKelas.harga}
                    diskon={itemKelas.diskon}
                    benefit={itemKelas.benefit}
                    cover={itemKelas.imgCover}
                    kategori={itemKelas.kategori}
                    slug={itemKelas.slug}
                  />
                );
              })}
        </Carousel> */}
      </div>
    </div>
  );
}
