import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./index.scss";

import CardProgressKelas from "./CardProgressKelas";

export default function KelasSaya(props) {
  return (
    <div className="section">
      <div className="container">
        <div className="kelas-saya-page">
          <div className="sidebar-menu">
            <NavLink
              className="sidebar-menu-item "
              to="/kelas-saya/progress/semua-kelas"
              activeClassName="sidebar-menu-item-active"
            >
              Semua Kelas
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/progress/progress-kelas"
              activeClassName="sidebar-menu-item-active"
            >
              Progress
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/progress/lulus"
              activeClassName="sidebar-menu-item-active"
            >
              Lulus
            </NavLink>
          </div>
          <Switch>
            <Route path="/kelas-saya/progress/semua-kelas">
              <CardProgressKelas data={props.data} />
            </Route>
            <Route path="/kelas-saya/progress/progress-kelas">
              <h1>ini semua progress</h1>
            </Route>
            <Route path="/kelas-saya/progress/lulus">
              <h1>ini semua lulus</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
