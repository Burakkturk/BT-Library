import React from "react";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Navbar from "../components/navbar/Navbar";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/detail/id" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route> */}

          <Route element={<PrivateRouter />}>
            <Route path="/about" element={<About />} />
            <Route path="/detail:id" element={<Detail />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
