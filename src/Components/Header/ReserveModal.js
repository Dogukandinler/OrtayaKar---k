import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReserveModal = ({ isOpen, onClose }) => {
  const param = useParams();
  const [formData, setFormData] = useState({
    peopleCount: "",
    time: "",
    date: "",
  });

  const notify = () => toast("Lütfen Boşlukları Doldurunuz");
  const notify2 = () => toast("Rezervasyon Yapıldı");
  const wait = async (d) =>
    new Promise((r) => {
      return setTimeout(r, d);
    });

  const sendRequest = () => {
    fetch("/Rezervasyon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
      body: JSON.stringify({
        kullaniciId: localStorage.getItem("currentUser"),
        restoranId: param.id,
        kisiSayisi: formData.peopleCount,
        saat: formData.time,
        gun: formData.date,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      formData.time === "" ||
      formData.data === "" ||
      formData.peopleCount === ""
    )
      return;

    console.log("data", formData);
    sendRequest();
  };

  const peopleLength = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered overflow="hidden">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Rezervasyon Formu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Select
              name="peopleCount"
              value={formData.peopleCount}
              onChange={handleChange}
              size="sm"
              placeholder="Kişi Sayisi"
            >
              {peopleLength.map((people, idx) => (
                <option value={people} key={idx}>
                  {people}
                </option>
              ))}
            </Select>
            <Input
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              size="sm"
            />
            <Input
              value={formData.time}
              onChange={handleChange}
              name="time"
              type="time"
            />
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
            Rezerve Et
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReserveModal;
