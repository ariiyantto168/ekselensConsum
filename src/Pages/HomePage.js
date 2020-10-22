import React, { Component } from "react";
import Layout from "Component/layout/index";

// Data
import Data from "JSON/landingPage.json";
import DataKelas from "JSON/kelas.json";

// Component
import Jumbotron from "Component/jumbotron";
import ListRekomendasi from "Component/listRekomendasi/ListRekomendasi";
import ListKategori from "Component/listKategori";
import ListBenefit from "Component/listBenefit";
import PromoBanner from "Component/promoBanner";
import ListTetsimoni from "Component/listTestimoniCard";

import axios from "axios";

export default class HomePage extends Component {
  state = {
    dataKategori: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8001/categories")
      .then((data) => {
        this.setState({ dataKategori: data.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    // console.log(process.env);
    return (
      <Layout>
        <Jumbotron />
        <ListRekomendasi data={DataKelas.kelas} />
        <ListKategori data={this.state.dataKategori} />
        <ListBenefit />
        <PromoBanner />
        <ListTetsimoni data={Data.testimoni} />
      </Layout>
    );
  }
}
