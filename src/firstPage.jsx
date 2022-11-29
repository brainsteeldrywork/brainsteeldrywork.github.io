import React from "react";

import Formi from "./components/Formi"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/MainServices";

function FirstPage() {
  return (
    <>
      <Header />
      <Main />
      <Formi />
      <Footer />
    </>
  );
}

export default FirstPage;
