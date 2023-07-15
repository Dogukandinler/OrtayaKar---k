import { Fragment, useEffect, useState } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import { Stack, Box } from "@chakra-ui/react";
import Background from "../../Assets/images/Background.png";
import Footer from "../../Common/Footer/Footer";
import DiscoverCard from "../../Components/Discover_Card/DiscoverCard";
import DiscoverFilter from "../../Components/Discover_Filter_Card/DiscoverFilter";
import DiscoverRestaurants from "../../Components/Discover_Restaurants_Card/DiscoverRestorans";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { API_BASE_URL } from "../../Api/Constants";

const Discover = () => {
  const [searchValue, setSearchValue] = useState("");

  const [discoverRestorants, setDiscoverRestorants] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/restoran`,
      headers: { Authorization: `Bearer ${localStorage.getItem("tokenKey")}` },
    }).then((discoverRestaurants) =>
      setDiscoverRestorants(discoverRestaurants.data)
    );
  }, []);

  const ara = () => {
    console.log(searchValue);
    axios({
      method: "get",
      url: `${API_BASE_URL}/restoran?search=${searchValue}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("tokenKey")}` },
    }).then((response) => {
      setDiscoverRestorants(response.data);
    });
  };

  return (
    <Fragment>
      <Header />

      <Box
        bgImage={Background}
        bgColor="#ddd"
        maxW="100vw"
        minH="100vh"
        maxH="auto"
        p="48px"
        position="relative"
        zIndex="0"
      >
        <Stack
          w="100%"
          h="100%"
          mt="100px"
          spacing={10}
          direction={["column", "column", "column", "row"]}
          justifyContent={["center", "center", "center", "center"]}
        >
          <Box display={["none", "none", "none", "none", "block"]}>
            <DiscoverFilter />
          </Box>

          <Stack spacing={4}>
            <DiscoverCard
              ara={ara}
              restorants={discoverRestorants}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <DiscoverRestaurants
              discoverRestorants={discoverRestorants}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Stack>
        </Stack>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Discover;
