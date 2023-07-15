import { useState, useEffect } from "react";
import {
  Stack,
  Card,
  Heading,
  CardBody,
  Image,
  Text,
  Code,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../Api/Constants";

const DiscoverRestorans = ({ discoverRestorants }) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={4}>
      {discoverRestorants.map((restaurant) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          bg="#fff"
          key={restaurant.id}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={restaurant.imgURL}
            alt={restaurant.title}
          />

          <Stack
            direction={"row"}
            w="100%"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent={["start", "start", "start", "space-between"]}
          >
            <CardBody>
              <Heading fontFamily={"unset"} fontSize="20px">
                {restaurant.restoranAdi}
              </Heading>

              <Text pt="10px" fontSize={14}>
                {restaurant.restoranDetayliAciklama}
              </Text>

              <Text pt="5px" fontSize={12}>
                {restaurant.resotranEcte}
              </Text>

              <Code
                children={restaurant.konum.il}
                mt="10px"
                fontSize={10}
                borderRadius={5}
              />
            </CardBody>

            <CardBody
              display="flex"
              alignItems="center"
              justifyContent={["center", "center", "center", "flex-end"]}
            >
              <Button
                w={["100%", "100%", "120px", "120px"]}
                colorScheme="whatsapp"
                fontSize="small"
                fontWeight={200}
                onClick={() =>
                  navigate(`/restoran/${restaurant.id}`, {
                    state: { restaurant },
                  })
                }
              >
                İncele
              </Button>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default DiscoverRestorans;
