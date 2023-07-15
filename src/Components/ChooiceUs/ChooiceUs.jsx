import React from "react";
import "./ChooiceUs.css";
import { Container, Col, Badge } from "reactstrap";
import { FaShippingFast, FaDollarSign, FaHeadphones } from "react-icons/fa";
import { Box, Image } from "@chakra-ui/react";

const ChooiceUs = () => {
  return (
    <Container className="chooice-us-container">
      <Box className="popular-menu-top">
        <h3 className="chooice-us-top">Neden Bizi Seçmelisiniz?</h3>
      </Box>

      <Box className="chooice-us-row">

        <Col className="chooice-us-content">
          <h3>Müşteri Yorumları:</h3>


        
        </Col>
      </Box>
    </Container>
  );
};

export default ChooiceUs;
