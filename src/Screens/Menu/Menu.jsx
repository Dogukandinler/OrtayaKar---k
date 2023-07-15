import React, { useEffect, useState } from "react";

import "./Menu.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../Api/Constants";
import FoodItem from "./FoodsMenu/FoodItem";
import { Box, Heading, Stack } from "@chakra-ui/react";

const Menu = () => {
  const params = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/Menuler/${params.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
    }).then((menus) => {
      setMenu(menus.data.yemekler);
      console.log(menus);
    });
  }, []);

  return (
    <Box w="100vw" minHeight="100vh" bg="black">
      <Stack w="full" h="full" py={10} px={10} spacing={10} textAlign="center">
        <Heading color="orange.300">Mevcut Yemekler</Heading>
        <Box h="100%" w="100%" display="flex" flexWrap="wrap" gap={20}>
          {menu && menu?.map((x) => <FoodItem key={x.id} food={x} />)}
        </Box>
      </Stack>
    </Box>
  );
};

export default Menu;
