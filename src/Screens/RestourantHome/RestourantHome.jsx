import React, { Fragment } from "react";
import "./RestourantHome.css";
import Header2 from './../../Components/Header/Header2';
import ChooiceUs from './../../Components/ChooiceUs/ChooiceUs';
import Testimonials from './../../Components/Testimonials/Testimonials';
import Header from "../../Components/Header/Header";


const  RestourantHome = () => {
  return (
    <Fragment>
      <Header/>
      <Header2 />
      <ChooiceUs/>
      <Testimonials/>
    </Fragment>
  );
}

export default RestourantHome;