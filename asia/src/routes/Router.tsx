import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../pages/Home";
// import Search from "../pages/search/Search";
import Login from "../pages/account/login/Login";
import Join from "../pages/account/join/Join";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/";

export default function Router() {
  return (
    // basename을 ""로 주어서 rootURL 설정
    <BrowserRouter basename="">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search" element={<Search />} /> */}
        </Route>
        <Route path="/account/" element={<Outlet />}>
          <Route path="join/" element={<Join />} />
          <Route path="login/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
