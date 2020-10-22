import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroDetail from "Component/heroDetail";
import KontenDetail from "Component/kontenKelasDetail";
import ListRekomendasiDetail from "Component/listRekomendasiDetailKelas";
import { connect } from "react-redux";

// Image
import imageCover from "Assets/Images/video-overview.png";
import profileImage from "Assets/Images/instruktur-profile-hero-detail.png";

import DataKelas from "JSON/kelas.json";
import Axios from "axios";

class DetailPage extends Component {
  state = {
    slugDetailPage: this.props.match.params.slugDetailKelas,
    dataComment: [],
    dataKelas: {},
  };
  // getProductDetailKelas = (slugAktifKelas) => {
  //   if (slugAktifKelas === "") {
  //     const kelasTemp = DataKelas.kelas.filter(
  //       (item) => item.slug === this.state.slugDetailPage
  //     );
  //     const ObjectKelas = Object.assign({}, ...kelasTemp);
  //     return ObjectKelas;
  //   } else {
  //     const kelasTemp = DataKelas.kelas.filter(
  //       (item) => item.slug === slugAktifKelas
  //     );
  //     const ObjectKelas = Object.assign({}, ...kelasTemp);
  //     return ObjectKelas;
  //   }
  // };

  getComment = () => {
    fetch("http://localhost:8001/comments", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ dataComment: data }))
      .catch((err) => console.log(err));
  };

  getData = (id) => {
    Axios.get(`http://localhost:8001/class/${id}`)
      .then((data) => {
        this.setState({ dataKelas: { ...data.data[0] } });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData(this.props.idclass);
    this.getComment();
  }

  render() {
    const { slugKelas, idclass } = this.props;
    const { dataKelas } = this.state;
    // const kelasDetail = this.getProductDetailKelas(slugKelas);
    return (
      <Layout>
        <HeroDetail
          judul={dataKelas.name}
          rate={4}
          instrukturName={dataKelas.instructor}
          instrukturRole={dataKelas.roleinstructor}
          instrukturImg={profileImage}
          demo={dataKelas.demo}
        />
        <KontenDetail
          komen={this.state.dataComment}
          deskripsi={dataKelas.description}
          deskInstruktur={dataKelas.tutor}
        />
        <ListRekomendasiDetail data={DataKelas.kelas} />
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    slugKelas: state.kelasReducer.slugKelas,
    idclass: state.kelasReducer.idclass,
  };
};

export default connect(mapStateToProps, null)(DetailPage);
