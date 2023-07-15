import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import "./Header2.css";

import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import sliderImg01 from "../../Assets/images/slider1.png";
import { API_BASE_URL } from "../../Api/Constants";
import ReserveModal from "./ReserveModal";
import { useDisclosure } from "@chakra-ui/react";
import ReviewForm from "../Testimonials/components/ReviewForm";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

const Header2 = () => {
  const [resData, setresData] = useState([]);
  const navigate = useNavigate();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const params = useParams();

  const [isFavorite, setIsFavorite] = useState(false);

  const notify1 = () => toast("Favorilere Eklendi");
  const notify2 = () => toast("Favorilerden Kaldırıldı");
  const wait = async (d) =>
    new Promise((r) => {
      return setTimeout(r, d);
    });

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
    sendRequest1();
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/restoran/${params.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
    }).then((restaurants) => {
      setresData(restaurants.data);
      setIsFavorite(restaurants.data.isFavorite);
      console.log(resData.id);
    });
  }, []);

  const sendRequest1 = () => {
    const method = isFavorite ? "DELETE" : "POST";
    fetch("/favorite", {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
      body: JSON.stringify({
        kullaniciId: localStorage.getItem("currentUser"),
        restoranId: params.id,
      }),
    })
      .then(async (res) => {
        isFavorite ? notify2() : notify1();
        res.json();
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  };

  const viewMore = () => {
    navigate(`/menu/${resData.id}`);
    console.log(localStorage.getItem("tokenKey"));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: CommentModalisOpen,
    onOpen: CommentModalonOpen,
    onClose: CommentModalonClose,
  } = useDisclosure();

  useEffect(() => {
    if (isReservationOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [isReservationOpen]);

  const slider = {
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <header>
      <Container className="header-container">
        <Slider {...slider}>
          <Box key={resData.id}>
            <div className="header-wrapper">
              <div className="header-content ">
                <h2 className="header-food-title ">
                  {resData.restoranAdi}
                  <button className="heart-icon" onClick={toggleFavorite}>
                    {isFavorite ? <IoHeart /> : <IoHeartOutline />}{" "}
                    {/* Render the heart icons based on favorite status */}
                  </button>
                </h2>
                <p className="header-food-explanation">
                  {resData.restoranDetayliAciklama}
                </p>
                <button className="view-more-btn" onClick={viewMore}>
                  Menü
                </button>
                <button className="view-more-btn" onClick={onOpen}>
                  Rezervasyon Yap
                </button>

                <button className="view-more-btn" onClick={CommentModalonOpen}>
                  Yorum Yap
                </button>
              </div>

              <img className="header-main-img" src={resData.imgUrl} alt="" />
            </div>
          </Box>
        </Slider>
      </Container>
      <ToastContainer position="top-center" />
      <ReserveModal isOpen={isOpen} onClose={onClose} />

      <ReviewForm isOpen={CommentModalisOpen} onClose={CommentModalonClose} />
    </header>
  );
};

export default Header2;
