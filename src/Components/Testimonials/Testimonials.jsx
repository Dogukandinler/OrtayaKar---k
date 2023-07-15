import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../Api/Constants";
import { Avatar, Box } from "@chakra-ui/react";

const Testimonials = () => {
  const [CommentData, setcommentData] = useState([]);

  const params = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/Yorumlar/RestoranId?restoranId=${params.id}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("tokenKey")}` },
    }).then((comments) => {
      setcommentData(comments.data);
    });
  }, []);
  return (
    <Container className="testimonials-container">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
      >
        <Box className="testimonials-box-container">
          {CommentData.map((comment) => (
            <div key={comment.id} className="testimonials-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-image">
                    <Avatar name={comment.user.userName}></Avatar>
                  </div>

                  <div className="name-username">
                    <strong>{comment.user.userName}</strong>
                    <small>{comment.user.email}</small>
                  </div>
                </div>
                <div className="reviews">
                  {Array.from({ length: comment.puan }).map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
              </div>

              <div className="clienst-comments">
                <p>{comment.yorumIcerigi}</p>
              </div>
              <small className="comment-date">{comment.createdDate}</small>
            </div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonials;
