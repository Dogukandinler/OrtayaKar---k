import React from "react";
import { Box, Image } from "@chakra-ui/react";

const FoodItem = ({ food }) => {
  return (
    <Box className="our-foods-single-menu" key={food.id}>
      <Image src={food.imgUrl} alt="fast-food15" />

      <Box className="food_info">
        <h4>{food.name}</h4>
        <p>{food.fiyatı}$</p>
      </Box>
    </Box>
  );
};

export default FoodItem;
