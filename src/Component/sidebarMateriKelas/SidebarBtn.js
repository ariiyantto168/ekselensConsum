import React, { useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setTypeMateri, setMateriSlug } from "Store/Action/materiAction";

function SidebarBtn(props) {
  const [idButton, setIdButton] = useState("");
  const { slugKelas } = useParams();

  const handleClikId = () => {
    return setIdButton(idButton === "" ? "sidebar-isopen" : "");
  };

  const handleType = (typeMateri, slugMateri) => {
    props.setTypeMateri(typeMateri);
    props.setMateriSlug(slugMateri);
  };

  const { title, materi } = props;
  return (
    <div className="sidebar-bab">
      <button className="sidebar-bab-btn" type="button" onClick={handleClikId}>
        {title}
      </button>
      <ul className={`sidebar-subbab ${idButton}`}>
        {materi.map((item, i) => {
          return (
            <li className="sidebar-subbab-item" key={`list-materi-kelas-${i}`}>
              <Link
                className="sidebar-subbab-link"
                to={`/materi/${slugKelas}/${item.slugMateriKelas}`}
                onClick={() => handleType(item.type, item.slugMateriKelas)}
              >
                {item.titleSubBab}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapDispatchToProps = {
  setTypeMateri,
  setMateriSlug,
};

export default connect(null, mapDispatchToProps)(SidebarBtn);
