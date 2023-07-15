import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import "./Header2.css";
import sliderData from "../../Assets/Data/Slider";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import sliderImg01 from "../../Assets/images/slider1.png";
import { API_BASE_URL } from "../../Api/Constants";

// New ReservationForm component
const ReservationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here
    // You can access the form data and perform actions such as sending a reservation request
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="peopleCount">How many people:</label>
      <input type="number" id="peopleCount" name="peopleCount" required />

      <label htmlFor="hour">Hour:</label>
      <input type="text" id="hour" name="hour" required />

      <button type="submit">Submit</button>
    </form>
  );
};
export default ReservationForm;