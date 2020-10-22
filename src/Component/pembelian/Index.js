import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

export default function Pembelian() {
  return (
    <div className="section">
      <div className="container">
        <div className="kelas-saya-page">
          <div className="sidebar-menu">
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/pembelian/semua-kelas"
              activeClassName="sidebar-menu-item-active"
            >
              Semua
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/pembelian/whislist"
              activeClassName="sidebar-menu-item-active"
            >
              Whislist
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/pembelian/menunggu-pembayaran"
              activeClassName="sidebar-menu-item-active"
            >
              Menunggu Pembayaran
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/pembelian/lunas"
              activeClassName="sidebar-menu-item-active"
            >
              Lunas
            </NavLink>
          </div>
          <Switch>
            <Route path="/kelas-saya/pembelian/semua-kelas">
              <h1>Semua Pembelian</h1>
            </Route>
            <Route path="/kelas-saya/pembelian/whislist">
              <h1>Whislist</h1>
            </Route>
            <Route path="/kelas-saya/pembelian/menunggu-pembayaran">
              <h1>Menunggu Pembayaran</h1>
            </Route>
            <Route path="/kelas-saya/pembelian/lunas">
              <h1>Lunas</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
