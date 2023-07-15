import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  VStack,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPhone, FaUser } from "react-icons/fa";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [telno, settelno] = useState("");

  const navigate = useNavigate();

  const notify = () => toast("Lütfen Boşlukları Doldurunuz");
  const notify2 = () => toast("Kayıt Olundu");
  const wait = async (d) =>
    new Promise((r) => {
      return setTimeout(r, d);
    });

  const handleUsername = (value) => {
    setusername(value);
  };
  const handlePassword = (value) => {
    setpassword(value);
  };
  const handleEmail = (value) => {
    setemail(value);
  };
  const handleTelno = (value) => {
    settelno(value);
  };

  const sendRequest = () => {
    fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
        email: email,
        telNo: telno,
      }),
    })
      .then(async (res) => {
        if (res.status === 201) {
          notify2();
          await wait(2000);
          navigate("/");
        } else {
          notify();
        }
        res.json();
      })
      .then((result) => result)
      .catch((err) => console.log(err));
  };
  const handleRegister = () => {
    sendRequest();
    setusername("");
    setpassword("");
    setemail("");
    settelno("");
  };

  return (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      w={{ base: "100%", md: 450 }}
      justifyContent="center"
    >
      <Heading
        w="100%"
        fontSize={["5xl", "7xl", "7xl", "7xl"]}
        fontFamily="VALORANT"
        textAlign="center"
        mb="20px"
      ></Heading>

      <Stack align="start" w="full" pb="20px">
        <Text fontSize={"2xl"} align="start">
          Kayıt Ol
        </Text>

        <Text fontSize="12px" color="gray.400" align="start">
          Yeni bir hesap oluştur
        </Text>
      </Stack>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          KullanıcıAdı
        </FormLabel>

        <InputGroup>
          <Input
            type="text"
            onChange={(i) => handleUsername(i.target.value)}
            placeholder="KullanıcıAdı Giriniz.."
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />

          <InputRightElement width="4.5rem">
            <FaUser color="#000" />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          E-mail
        </FormLabel>

        <InputGroup>
          <Input
            type="e-mail"
            onChange={(i) => handleEmail(i.target.value)}
            placeholder=" E-mail Giriniz.."
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />

          <InputRightElement width="4.5rem">
            <EmailIcon color="#000" />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          TelefonNumarası
        </FormLabel>

        <InputGroup>
          <Input
            type="tel"
            onChange={(i) => handleTelno(i.target.value)}
            placeholder="TelefonNumarası Giriniz.."
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />

          <InputRightElement width="4.5rem">
            <FaPhone color="#000" />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          Şifre
        </FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            onChange={(i) => handlePassword(i.target.value)}
            placeholder="Şifre Giriniz.."
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />
          <InputRightElement width="4.5rem">
            <Button
              color="#000"
              h="1.5rem"
              size="18px"
              bg="none"
              onClick={showPassword}
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl pt="50px">
        <Button
          onClick={handleRegister}
          w="100%"
          bg="#4462F2"
          fontWeight="400"
          fontSize="14px"
          borderRadius="5px"
          _hover={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
        >
          Hesap Oluştur
        </Button>
        <ToastContainer position="top-center" />
      </FormControl>

      <FormControl>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            m="30px 0px"
          >
            <Stack>
              <Text
                w={["70px", "120px", "130px", "140px"]}
                border="1px solid #ddd"
              ></Text>
            </Stack>

            <Text></Text>

            <Stack>
              <Text
                w={["70px", "120px", "130px", "140px"]}
                border="1px solid #ddd"
              ></Text>
            </Stack>
          </Box>
        </Box>
      </FormControl>
    </VStack>
  );
};

export default SignUpForm;
