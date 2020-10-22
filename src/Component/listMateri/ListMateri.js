import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import Axios from "axios";

import { Link } from "react-router-dom";

export default function ListMateri(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [idList, setIdList] = useState(0);
  const [dataSubClass, setDataSubClass] = useState([]);
  const [dataMateri, setDataMateri] = useState([]);

  const idClassActive = useSelector((state) => state.kelasReducer.idclass);

  const handleShowList = (id) => {
    if (idList === id) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setIdList(id);
  };

  const getSubclass = () => {
    Axios.get("http://localhost:8001/subclass")
      .then((data) => {
        // console.log(data.data.filter((item) => item.idclass === idClassActive));
        setDataSubClass(
          data.data.filter((item) => item.idclass === idClassActive)
        );
      })
      .catch((err) => console.log(err));
  };
  const getMateri = () => {
    Axios.get("http://localhost:8001/materies")
      .then((data) => setDataMateri(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSubclass();
    getMateri();
  }, []);

  const showSubBab = (idSub) => {
    if (idList === idSub && isOpen) {
      // setIsOpen(!isOpen);
      return " isOpenClass";
    }
  };

  console.log(dataMateri);
  return (
    <div className="list-materi">
      <div className="list-kelas">
        {dataSubClass.map((item, i) => {
          return (
            <div className="btn-list-materi" key={`materi-${i}`}>
              <Link
                className="btn btn-materi-kelas"
                onClick={() => handleShowList(item.idsubclass)}
              >
                {item.headmateri}
              </Link>
              <ul
                className={`list-materi-kelas ${showSubBab(item.idsubclass)}`}
              >
                {dataMateri
                  .filter(
                    (itemMateri) => itemMateri.idsubclass === item.idsubclass
                  )
                  .map((listItem) => {
                    return (
                      <li
                        className="list-materi-kelas-item"
                        key={`sub-kelas${item.idmateries}`}
                      >
                        <Link>{listItem.name_materi}</Link>
                      </li>
                    );
                  })}
                {/* <li
                  className="list-materi-kelas-item"
                  key={`sub-kelas${item.idsubclass}`}
                >
                  <Link>Materi 2</Link>
                </li> */}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
