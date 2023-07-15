import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  Link,
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleUsername = (value) => {
    setusername(value);
  };
  const notify = () => toast("Kullanıcı Adı Veya Şifreyi Kontrol Ediniz");
  const notify2 = () => toast("Giriş Yapıldı");
  const wait = async (d) =>
    new Promise((r) => {
      return setTimeout(r, d);
    });

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/signup");
  };

  const handlePassword = (value) => {
    setpassword(value);
  };

  const sendRequest = () => {
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          notify2();
          await wait(2000);
          navigate("/landing");
          return res.json();
        }
      })
      .then((result) => {
        localStorage.setItem("tokenKey", result.token.message);
        localStorage.setItem("currentUser", result.token.userId);
        localStorage.setItem("userName", username);
      })
      .catch((err) => notify());
  };

  const handleLogin = () => {
    sendRequest();
    setusername("");
    setpassword("");
  };

  return (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      w={{ base: "90%", md: 400 }}
      justifyContent="center"
    >
      <Stack align="center" pb="50px">
        <Heading fontSize="4xl" fontWeight="400" textAlign="center">
          Lütfen Giriş Yapınız
        </Heading>
        <Text fontSize={"1xl"} color={"gray.400"} align="center"></Text>
      </Stack>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          KullanıcıAdı
        </FormLabel>

        <InputGroup>
          <Input
            value={username}
            type="text"
            onChange={(i) => handleUsername(i.target.value)}
            placeholder="KullanıcıAdı giriniz.."
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
          Şifre
        </FormLabel>

        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            onChange={(i) => handlePassword(i.target.value)}
            placeholder="Şifre Giriniz"
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

        <Box
          display="flex"
          w="100%"
          pt="8px"
          justifyContent="flex-end"
          fontSize="12px"
          color={"gray.500"}
        ></Box>
      </FormControl>

      <FormControl pt="20px">
        <Button
          onClick={handleLogin}
          w="100%"
          bg="#4462F2"
          fontWeight="400"
          fontSize="14px"
          borderRadius="5px"
          _hover={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
        >
          Giriş Yap
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

            <Text>Veya</Text>

            <Stack>
              <Text
                w={["70px", "120px", "130px", "140px"]}
                border="1px solid #ddd"
              ></Text>
            </Stack>
          </Box>
        </Box>
      </FormControl>
      <FormControl pt="20px">
        <Button
          onClick={handleRegister}
          w="100%"
          bg="#4462F2"
          fontWeight="400"
          fontSize="14px"
          borderRadius="5px"
          _hover={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
        >
          Kayıt Ol
        </Button>
      </FormControl>
    </VStack>
  );
};

export default SignInForm;
