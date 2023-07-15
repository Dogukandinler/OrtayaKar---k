import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";

import "./ReviewForm.css";

import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ReviewForm = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(1);
  const [input, setInput] = useState();
  const param = useParams();

  const notify = () => toast("Lütfen Boşlukları Doldurunuz");
  const notify2 = () => toast("Yorum Yapıldı");
  const wait = async (d) =>
    new Promise((r) => {
      return setTimeout(r, d);
    });

  const handleInput = (value) => {
    setInput(value);
  };

  const sendRequest = () => {
    fetch("/Yorumlar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
      body: JSON.stringify({
        kullaniciId: localStorage.getItem("currentUser"),
        restoranId: param.id,
        yorumIcerigi: input,
        puan: rating,
      }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          notify2();
          await wait(2000);
          window.location.reload(true);
        } else {
          notify();
        }
        res.json();
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  };
  const handleSubmit = () => {
    console.log("data", input);
    sendRequest();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered overflow="hidden">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Restorana Yorum Yap</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Textarea
              name="input"
              placeholder="Yorumunuzu yaziniz..."
              value={input}
              onChange={(i) => handleInput(i.target.value)}
            ></Textarea>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              px={4}
              py={2}
            >
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <FaStar
                    className="star"
                    key={index}
                    onClick={() => setRating(index)}
                  />
                );
              })}
            </Box>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            w="full"
            size="sm"
            colorScheme="green"
            fontWeight={100}
            onClick={handleSubmit}
          >
            Yorum Yap
          </Button>
          <ToastContainer position="top-center" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReviewForm;
