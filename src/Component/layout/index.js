import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import FooterC from "Component/footer";
import "./layout.scss";

// Data
import Data from "JSON/landingPage.json";

export default function index(props) {
  const { Header, Footer, Content } = Layout;
  if (props.isLoginPage) {
    return (
      <Layout>
        <Header className="header">
          <Navbar data={Data.kategori} />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    );
  }
  return (
    <Layout>
      <Header className="header">
        <Navbar data={Data.kategori} />
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <FooterC />
      </Footer>
    </Layout>
  );
}
