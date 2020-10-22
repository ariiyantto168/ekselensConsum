import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroKategori from "Component/heroKategori";
import Card from "Component/card";

import DataKelas from "JSON/kelas.json";

import { connect } from "react-redux";
import Axios from "axios";

import instructorPhoto from "Assets/Images/user-testimoni.png";

import { setKategori } from "Store/Action/kategoriAction";

class KategoriPage extends Component {
  state = {
    slugId: this.props.match.params.slugKategori,
    dataKelas: [],
    kategoriId: {},
    highligh: [],
  };

  getData = () => {
    Axios.get("http://localhost:8001/class")
      .then((data) => {
        this.setState({
          dataKelas: data.data.filter(
            (item) => item.idcategories === this.props.kategoriAktif
          ),
        });
      })
      .catch((err) => console.log(err));
  };

  getKategori = () => {
    Axios.get("http://localhost:8001/categories")
      .then((data) => {
        this.setState({
          kategoriId: data.data.filter(
            (item) => item.slug === this.state.slugId
          ),
        });
        this.props.setKategori(this.state.kategoriId[0].idcategories);
      })
      .catch((err) => console.log(err));
  };

  getHighligh = () => {
    fetch("http://localhost:8001/hilights")
      .then((res) =>
        res.json().then((data) => this.setState({ highligh: [...data] }))
      )
      .catch((err) => console.log(err));
  };

  async componentDidMount() {
    await this.getKategori();
    await this.getData();
    await this.getHighligh();
    // console.log("ini pas dipanggil");
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.kategoriAktif);
    if (prevProps.kategoriAktif != this.props.kategoriAktif) {
      // await this.getKategori();
      await this.getData();
      await this.getHighligh();
    }
    // console.log("dipanggil terus");
  }

  render() {
    const { kategoriAktif } = this.props;
    // console.log(this.state.highligh);

    return (
      <Layout>
        <HeroKategori />
        <div className="container mb-5">
          <div className="row">
            {this.state.dataKelas.map((item, i) => {
              return (
                <div className="col-3" key={`col-rek-${i}`}>
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
                    benefit={this.state.highligh.filter(
                      (itemHighligh) => itemHighligh.idclass === item.idclass
                    )}
                    cover={item.images}
                    kategori={"marketing"}
                    slug={item.slug}
                    id={item.idclass}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kategoriAktif: state.kategoriReducer.kategoriAktif,
  };
};

const mapDispatchToProps = {
  setKategori,
};

export default connect(mapStateToProps, mapDispatchToProps)(KategoriPage);
