import React from "react";
import styled from "styled-components";
import Header from "../common/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";

const Layout = styled.div`
  position: relative; // relative로 자신의 원래 위치에 있게 한다.
`;

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Outlet />  
      <Footer />
    </Layout>
  );
};

export default MainLayout;
