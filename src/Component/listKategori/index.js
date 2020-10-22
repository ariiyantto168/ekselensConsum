import React from "react";
import KategoriBtn from "Component/kategoriButton";
import { useDispatch } from "react-redux";

import "./index.scss";
import { Kategori } from "Pages";

export default function Index(props) {
  const dispatch = useDispatch();

  const handleSetKategori = (id) => {
    dispatch({
      type: "SET_KATEGORI",
      payload: id,
    });
  };
  return (
    <div className="section">
      <div className="container list-kategori">
        <h2 className="title">
          Kategori <span className="font-weight-bold">Kelas</span>
        </h2>
        <div className="kategori">
          <div className="row">
            {props.data.map((item, index) => {
              return (
                <div className="col-2" key={`kategori-${item.idcategories}`}>
                  <KategoriBtn
                    icon={item.images}
                    nama={item.name}
                    slug={item.slug}
                    idKategori={item.idcategories}
                    handleSetKategori={() =>
                      handleSetKategori(item.idcategories)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
