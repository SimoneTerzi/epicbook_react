import React from "react";
import MyNav from "../Components/MyNavbar/MyNav"
import MyFooter from "../Components/MyFooter/MyFooter";

const Mainlayout = ({ children }) => {
  return (
    <>
      <MyNav />
      {children}
      <MyFooter />
    </>
  );
};

export default Mainlayout;