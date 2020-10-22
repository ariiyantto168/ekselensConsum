import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Row, Col } from "antd";
import Card from "Component/card";
import Layout from "Component/layout";
import reactPlayer from "react-player";

// Data
import Data from "JSON/landingPage.json";
import DataKelas from "JSON/kelas.json";

// Component Test
import Jumbotron from "Component/jumbotron"; /**Done */
import CategoryBtn from "Component/kategoriButton";
import Navbar from "Component/navbar";
import Layout1 from "Component/layout";
import ListRekomendasi from "Component/listRekomendasi/ListRekomendasi";
import ListKategori from "Component/listKategori";
import ListBenefit from "Component/listBenefit";
import PromoBanner from "Component/promoBanner";
import CardTestimoni from "Component/testimonialCard";
import ListTestimoniCard from "Component/listTestimoniCard";
import Footer1 from "Component/footer";
import ExampleComp from "Component/listMateri/ListMateri";
import Kuis from "Component/kuis/Kuis";

import HeroKategori from "Component/heroKategori";
import HeroDetail from "Component/heroDetail";
import KontenDetail from "Component/kontenKelasDetail";
import ListRekomendasiDetail from "Component/listRekomendasiDetailKelas";

import Dummy from "JSON/dummy.json";
import Kelas from "JSON/kelas.json";
// const { Header, Content, Footer } = Layout;
export default class ExamplePage extends Component {
  state = {
    benefit: [],
    classState: [],
  };
  async componentDidMount() {
    await fetch("http://localhost:8001/class")
      .then((res) =>
        res.json().then((data) => this.setState({ classState: data }))
      )
      .catch((err) => console.log(err));
    await fetch("http://localhost:8001/hilights")
      .then((res) =>
        res.json().then((data) => this.setState({ benefit: [...data] }))
      )
      .catch((err) => console.log(err));
  }
  render() {
    let { classState } = this.state;
    // console.log(this.state.benefit);
    console.log(classState);
    return (
      <div className="section-example">
        <div className="container">
          <Row>
            <Carousel slidesToScroll={1} slidesToShow={4} autoplay dots={false}>
              {this.state.classState.map((item, i) => {
                return (
                  <Col span={6}>
                    <Card
                      key={1}
                      judul={item.name}
                      instrukturPhoto={""}
                      instrukturNama={item.tutor}
                      instrukturRole={"Backend"}
                      rate={5}
                      jumMateri={3}
                      jumJam={2}
                      harga={"150.000"}
                      diskon={"50.000"}
                      benefit={this.state.benefit.filter(
                        (itemBenefit) => itemBenefit.idclass === item.idclass
                      )}
                      cover={""}
                      kategori={"teknologi"}
                      slug={"/"}
                    />
                  </Col>
                );
              })}
            </Carousel>
          </Row>
        </div>
      </div>
    );
  }
}
