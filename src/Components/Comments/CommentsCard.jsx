import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {
  Stack,
  Card,
  CardHeader,
  CardFooter,
  Text,
  Image,
  CardBody,
  Heading,
  Button,
  Badge,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { API_BASE_URL } from "../../Api/Constants";

const CommentsCard = ({comment}) => {
  //----------------Rezerve Edilen Restoranlar Listesi------------------

  const [reserved, setReserved] = useState([]);

  //----------------Rezerve Etmek için Discovera Git--------------------

  const navigate = useNavigate(); 

  

  return (
    <Fragment>
     

   
    </Fragment>
  );
};

export default CommentsCard;
