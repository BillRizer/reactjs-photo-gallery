import React from "react";
import {  Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const LayoutContainer = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};
