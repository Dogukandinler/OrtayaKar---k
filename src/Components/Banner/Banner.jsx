import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BannerBackground from "../../Assets/images/banner.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const currentUser = localStorage.getItem("currentUser");
    navigate(`/favrestoran/${currentUser}`);
  };
  return (
    <Box maxW="100vw" h="80vh">
      <Box
        display="table"
        w="100%"
        h="100%"
        bgImage={BannerBackground}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box w="100%" h="100%" bg="rgba(0,0,0,0.6)">
          <Box pt="250px" pb="200px" textAlign="center">
            <Heading
              fontFamily={"cursive"}
              fontSize={["3em", "5em", "6em", "10em"]}
              fontWeight="700"
              mt="0px"
              mb="10px"
              color="#ddd"
            >
              OrtayaKarışık
            </Heading>

            <Text
              fontSize={["16px", "16px", "18px", "28px"]}
              fontWeight="300"
              mt="10px"
              mb="40px"
              color="#fff"
            >
              Bizimle Kolay
            </Text>

            <Button
              top="%50"
              colorScheme="green"
              fontWeight="regular"
              fontSize="14px"
              onClick={() => navigate("/discover")}
            >
              Restoranlari Keşfedin
            </Button>

            <Button
              marginLeft="25px"
              colorScheme="green"
              fontWeight="regular"
              fontSize="14px"
              onClick={handleClick}
            >
              Favorilerinden Devam Et
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
