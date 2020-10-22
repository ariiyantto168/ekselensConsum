import React, { useEffect, useState } from "react";
import "./index.scss";
import TestimoniCard from "Component/testimonialCard";
import { Carousel } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// Arrow
import Next from "Assets/Images/next.png";
import Previous from "Assets/Images/previous.png";
import Axios from "axios";

function ArrowNext(props) {
  const { style, onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#2F3C80",
        borderRadius: "30px",
        width: "62px",
        height: "62px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <img src={Next} alt="" />
    </div>
  );
}
function ArrowPrev(props) {
  const { style, onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#2F3C80",
        borderRadius: "30px",
        width: "62px",
        height: "62px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <img src={Previous} alt="" />
    </div>
  );
}

export default function Index(props) {
  const [dataTesti, setDataTesti] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    slidesPerRow: 1,
    className: "scroll",
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };

  useEffect(() => {
    Axios.get("http://localhost:8001/testimonies")
      .then((data) => {
        setDataTesti(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  if (dataTesti.length == 0) {
    return <Spin indicator={antIcon} />;
  }

  return (
    <div className="section">
      <div className="container list-testimoni">
        <h2 className="title">
          Cerita <span className="font-weight-bold">Pembelajar</span>
        </h2>
        <Carousel {...settings} arrows>
          {dataTesti.map((item, index) => {
            return (
              <TestimoniCard
                key={`card-testimoni-${index}`}
                img={item.images}
                nama={item.name}
                role={item.jobrole}
                testimoni={item.description}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
