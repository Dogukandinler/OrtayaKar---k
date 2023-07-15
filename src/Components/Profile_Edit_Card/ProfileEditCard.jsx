import React, { useEffect, useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Stack,
  Button,
  Heading,
  Card,
} from "@chakra-ui/react";
import { MdAddAPhoto } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../Api/Constants";

const ProfileEditCard = () => {
  const [formData, setFormData] = useState({
    İLÇE: "",
    İL: "",
    MAHALLE: "",
    SOKAK: "",
    BinaNo: "",
    zipCode: "",
  });
  const [userData, setuserData] = useState([]);
  const params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini kullanarak yapmak istediğiniz işlemleri gerçekleştirin
    console.log(formData);
    // Örnek olarak, formu sıfırlayabilirsiniz
    setFormData({
      İL: "",
      İLÇE: "",
      MAHALLE: "",
      SOKAK: "",
      BinaNo: "",
      zipCode: "",
    });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/kullanici/${localStorage.getItem("currentUser")}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
    }).then((user) => {
      setuserData(user.data);
    });
  }, []);
  return (
    <Stack direction="column" spacing="6" mt="30px">
      {/*-----------------------Card-1 Title------------------------- */}

      <Stack key={userData.id}>
        <Heading
          textAlign="start"
          fontSize="16PX"
          fontWeight="bold"
          color="rgb(0,0,0,0.5)"
          mb="5px"
        >
          PERSONEL BİLGİLERİNİZ
        </Heading>

        <Card
          bg="#fff"
          color="#000"
          boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
          minW={["320px", "495px", "440px", "570px"]}
          maxW={["340px", "340px", "340px", "570px"]}
          h={["500px", "600px", "500px", "500px"]}
          p="16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/*--------------------------Add User Photo Image and E-mail Adres--------------------------- */}

          <Stack w="100%" textAlign="start">
            <FormControl
              onSubmit={handleSubmit}
              w="72px"
              h="72px"
              bg="rgb(240, 242, 245)"
              borderRadius="50%"
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#fff"
            >
              <FormLabel htmlFor="add" m="0">
                <MdAddAPhoto color="#777" fontSize="22px" cursor="pointer" />
              </FormLabel>
              <Input type="file" id="add" display="none" />
            </FormControl>

            <FormControl>
              <FormHelperText m="10px 0px" fontSize="10px">
                {userData.createdDate}
              </FormHelperText>

              <FormLabel mt="5px" fontSize="12px">
                {userData.email}
              </FormLabel>
            </FormControl>
          </Stack>

          <Stack w="100%" direction="row" spacing="8" p="16px">
            <Input
              w="45%"
              variant="flushed"
              value={formData.İL}
              name="İL"
              placeholder="İL"
              onChange={handleChange}
              _placeholder={{ fontSize: "12px" }}
              fontSize="12px"
              focusBorderColor="orangered"
            />
            <Input
              w="45%"
              variant="flushed"
              placeholder="İLÇE"
              onChange={handleChange}
              name="fullName"
              value={formData.fullName}
              _placeholder={{ fontSize: "12px" }}
              fontSize="12px"
              focusBorderColor="orangered"
            />
          </Stack>

          <Stack w="100%" p="16px" direction="row" spacing="8">
            <Input
              w="45%"
              variant="flushed"
              value={formData.SOKAK}
              name="SOKAK"
              placeholder="Sokak"
              onChange={handleChange}
              _placeholder={{ fontSize: "12px" }}
              fontSize="12px"
              focusBorderColor="orangered"
            />
          </Stack>
          <Stack w="100%" p="16px" direction="row" spacing="8">
            <Input
              w="45%"
              variant="flushed"
              value={formData.MAHALLE}
              name="MAHALLE"
              placeholder="Mahalle"
              onChange={handleChange}
              _placeholder={{ fontSize: "12px" }}
              fontSize="12px"
              focusBorderColor="orangered"
            />
          </Stack>

          <Stack p="16px" w="100%">
            <Select
              variant="flushed"
              w="40%"
              fontSize="12px"
              focusBorderColor="orangered"
            >
              <option>Türkçe</option>
              <option>English</option>
              <option>Rusça</option>
            </Select>
          </Stack>

          {/*---------------------------Save All Changes Button----------------------- */}

          <Stack textAlign="start" w="100%" p="16px">
            <Button
              type="submit"
              colorScheme={"blackAlpha"}
              color="#fff"
              fontWeight="regular"
              fontSize="14px"
              w="200px"
              disabled
            >
              Değişiklikleri Kaydet
            </Button>
          </Stack>
        </Card>
      </Stack>

      {/*---------------------------Şifre değiştir Butonu----------------------- */}

      <Stack direction="column"></Stack>
    </Stack>
  );
};

export default ProfileEditCard;
