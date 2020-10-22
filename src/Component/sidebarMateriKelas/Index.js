import React, { useState } from "react";
import "./index.scss";
import SidebarBtn from "./SidebarBtn";

export default function Index(props) {
  const { data } = props;
  return (
    <div className="sidebar-materi-kelas">
      <h2 className="title-sidebar">Konten Kelas</h2>
      {data.bab.map((item, i) => {
        return (
          <SidebarBtn
            key={`sidebar-button-${i}`}
            title={item.titleBab}
            materi={item.materi}
          />
        );
      })}
    </div>
  );
}
