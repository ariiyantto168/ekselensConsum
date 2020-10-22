import React, { Component } from "react";
import Layout from "Component/layout";
import { NavLink, Route, Switch } from "react-router-dom";
import KelasSaya from "Component/kelasSaya/Index";
import Pembelian from "Component/pembelian/Index";

// Data
import DataKelas from "JSON/kelasSaya.json";

export default class KelasSayaPage extends Component {
  state = {
    slug: "progress",
  };
  handleClass = (slugNav) => {
    this.setState({ slug: slugNav });
  };

  giveClassActive = (slugClass) => {
    return this.state.slug === slugClass
      ? "btn-navbar-kelas btn-navbar-kelas-active"
      : "btn-navbar-kelas";
  };

  render() {
    const data = Object.assign({}, ...DataKelas.kelas);
    return (
      <Layout isLoginPage>
        <div className="section">
          <div className="navbar-kelas-saya">
            <div className="container kelas-saya-menu">
              <NavLink
                className={` ${this.giveClassActive("progress")}`}
                to="/kelas-saya/progress/semua-kelas"
                onClick={() => this.handleClass("progress")}
              >
                Kelas Saya
              </NavLink>
              <NavLink
                className={` ${this.giveClassActive("pembelian")}`}
                to="/kelas-saya/pembelian/semua-kelas"
                onClick={() => this.handleClass("pembelian")}
              >
                Pembelian
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route
              exact
              path="/kelas-saya/progress/:slugProgress"
              component={() => <KelasSaya data={data} />}
            ></Route>
            <Route
              path="/kelas-saya/pembelian/:slugPembelian"
              component={Pembelian}
            ></Route>
          </Switch>
        </div>
      </Layout>
    );
  }
}
