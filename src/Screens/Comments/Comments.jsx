import React, { Fragment } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import { Stack, Box, Text } from "@chakra-ui/react";
import Background from "../../Assets/images/Background.png";
import Footer from "../../Common/Footer/Footer";
import ProfileCard from "./../../Components/Profile_Card/ProfileCard";

import Header from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../Api/Constants";
import CommentsCard from "./comment-card/CommentsCard";

const Comments = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);

  const id = JSON.parse(localStorage.getItem("currentUser"));

  console.log("me", id);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/Yorumlar?kullaniciId=${params.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
    }).then((restaurants) => {
      setComments(restaurants.data);
    });
  }, []);

  console.log("usercomment", comments);
  return (
    <Fragment>
      <Header />

      <Box
        bgImage={Background}
        bgColor="#ddd"
        maxW="100vw"
        minH="100vh"
        maxH="auto"
        position="relative"
        zIndex="0"
      >
        <Stack
          w="100%"
          h="100%"
          spacing={12}
          direction={["column", "column", "column", "row"]}
          alignItems={["center", "center", "center", "flex-start"]}
          justifyContent={["center", "center", "center", "center"]}
          pt="100px"
        >
          {/*------------------------Profile Card Component-------------------------- */}
          <Box display={["none", "none", "none", "none", "block"]}>
            <ProfileCard />
          </Box>

          {/*------------------------Reservations İnfo Card-------------------------- */}
          <Box
            bg="whiteAlpha.300"
            width={700}
            maxWidth="100%"
            borderRadius={5}
            p={10}
            style={{ marginBottom: "100px" }}
          >
            <Text fontSize="3xl" textAlign="center" mb={5}>
              Yorumlarim : {comments.length}
            </Text>
            {comments.length ? (
              <CommentsCard comments={comments} />
            ) : (
              <div>Yorum Yok</div>
            )}
          </Box>
        </Stack>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Comments;
