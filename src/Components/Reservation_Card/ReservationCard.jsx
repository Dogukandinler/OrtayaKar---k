import { Box, Image, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { useReseveCard } from "./useReserveCard";
import { useNavigate } from "react-router-dom";

const ReservationCard = () => {
  const { reserved } = useReseveCard();

  console.log("RESERVED", reserved);

  const navigate = useNavigate();

  return (
    <>
      {reserved.length ? (
        reserved.map((reserve, idx) => (
          <Box
            key={idx}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            width="100%"
            bg="whiteAlpha.300"
            p={5}
          >
            <Flex
              flexDirection={["column", "column", "column", "row"]}
              alignItems="center"
              justifyContent="center"
            >
              <Box flexShrink={0}>
                <Image
                  src={reserve.restoran.imgUrl}
                  alt={reserve.restoran.imgUrl}
                  width={300}
                  height={200}
                  objectFit="cover"
                  borderRadius="md"
                  draggable={false}
                />
              </Box>
              <Box flex="1" ml={4}>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" mb={2}>
                    {reserve.restoran.restoranAdi}
                  </Text>

                  <Text color="gray.500" fontSize="xs">
                    Oluşturulma Tarihi: {reserve.createdDate}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    Rezervasyon Günü: {reserve.gun}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    Rezervasyon Saati: {reserve.saat}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    Kişi saysi: {reserve.kisiSayisi}
                  </Text>

                  <Text color="gray.500" fontSize="xs">
                    {reserve.restoran.restoranDetayliAciklama}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    {/* Status: {reserve.bookingStatus} */}
                  </Text>
                </Box>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent={{ base: "center", md: "flex-start" }}
                  gap={5}
                  pt={5}
                >
                  <Button
                    w={{ base: "100%", md: "120px" }}
                    colorScheme="facebook"
                    fontSize="small"
                    fontWeight={555}
                    size="sm"
                    onClick={() => navigate("/restoran/" + reserve.restoran.id)}
                  >
                    Görüntüle
                  </Button>
                  <Button
                    w={{ base: "100%", md: "120px" }}
                    colorScheme="red"
                    fontSize="small"
                    fontWeight={200}
                    size="sm"
                    //onClick={}
                  >
                    İptal Et
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </Box>
        ))
      ) : (
        <div>Reservasyon Yok</div>
      )}
    </>
  );
};

export default ReservationCard;

// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import {
//   Stack,
//   Card,
//   CardHeader,
//   CardFooter,
//   Text,
//   Image,
//   CardBody,
//   Heading,
//   Button,
//   Badge,
//   Box,
// } from "@chakra-ui/react";
// import { useNavigate, useParams } from "react-router-dom";
// import { StarIcon } from "@chakra-ui/icons";
// import { API_BASE_URL } from "../../Api/Constants";

// const ReservationCard = () => {
//   const params = useParams();
//   //----------------Rezerve Edilen Restoranlar Listesi------------------

//   const [reserved, setReserved] = useState([]);

//   //----------------Rezerve Etmek için Discovera Git--------------------

//   const navigate = useNavigate();

//   //----------------Rezerve Edilen  Restoranlarin Bilgisi---------------

//   useEffect(() => {
//     axios({
//       method: "get",
//       url: `${API_BASE_URL}/Rezervasyon?kullaniciId=${params.id}`,
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
//       },
//     }).then((reserved) => {
//       setReserved(reserved.data);
//     });
//   }, []);

//   return (
//     <Fragment>
//       {/*--------------------------Eger Reservasyon Bulunuyorsa------------------------------*/}

//       {reserved.length > 0 ? (
//         <Stack spacing={4}>
//           <Heading mt="30px">
//             <Badge fontSize={["16px", "18px", "20px", "20px"]}>
//               Yaklaşan Rezervasyonlar ({reserved.length})
//             </Badge>
//           </Heading>

//           {reserved.map((reservedRestaurant) => (
//             <Card
//               direction={{ base: "column", sm: "row" }}
//               overflow="hidden"
//               bg="#fff"
//               key={reservedRestaurant.id}
//             >
//               <Image
//                 objectFit="cover"
//                 maxW={{ base: "100%", sm: "200px" }}
//                 src={reservedRestaurant.imgURL}
//                 alt={reservedRestaurant.title}
//               />

//               <Stack
//                 direction={"row"}
//                 w="100%"
//                 flexDirection={["column", "column", "column", "row"]}
//                 justifyContent={["start", "start", "start", "space-between"]}
//               >
//                 <CardBody w="100%">
//                   <Heading fontFamily={"unset"} fontSize="20px">
//                     {reservedRestaurant.restoran.restoranAdi}
//                   </Heading>

//                   <Text pt="10px" fontSize={14}>
//                     {reservedRestaurant.Date}
//                   </Text>

//                   <Text pt="5px" fontSize={12}>
//                     {reservedRestaurant.comment}
//                   </Text>

//                   <Text pt="5px" fontSize={12}>
//                     {reservedRestaurant.numberOfPeople}
//                   </Text>

//                   <Box display="flex" mt="2" alignItems="center" size="xs">
//                     {Array(5)
//                       .fill("")
//                       .map((_, i) => (
//                         <StarIcon
//                           fontSize="xs"
//                           key={i}
//                           color={
//                             i < reservedRestaurant.star
//                               ? "teal.500"
//                               : "gray.300"
//                           }
//                         />
//                       ))}
//                   </Box>
//                 </CardBody>

//                 <CardBody
//                   display="flex"
//                   alignItems="center"
//                   justifyContent={["center", "center", "center", "flex-end"]}
//                 >
//                   <Button
//                     w={["100%", "100%", "120px", "100px"]}
//                     colorScheme="whatsapp"
//                     fontSize="small"
//                     fontWeight={200}
//                     size="sm"
//                   >
//                     Düzenle
//                   </Button>

//                   <Button
//                     w={["100%", "100%", "120px", "100px"]}
//                     colorScheme="red"
//                     fontSize="small"
//                     fontWeight={200}
//                     ml="20px"
//                     size="sm"
//                   >
//                     İptal Et
//                   </Button>
//                 </CardBody>
//               </Stack>
//             </Card>
//           ))}
//         </Stack>
//       ) : (
//         /*------------------------------------Eger Reservasyon Bulunmuyorsa------------------------------*/

//         <Stack spacing="6">
//           <Heading>
//             <Badge
//               fontSize={["16px", "16px", "20px", "20px"]}
//               colorScheme="blackAlpha"
//             >
//               Yaklaşan Rezervasyonlar ({reserved.length})
//             </Badge>
//           </Heading>

//           <Card
//             bg="#fff"
//             w={["310px", "470px", "430px", "730px"]}
//             overflow="hidden"
//           >
//             <CardHeader>
//               <Heading fontFamily="Poppins" fontSize="20px"></Heading>
//             </CardHeader>
//             <CardBody fontSize="small">
//               <Text>Yaklaşan Rezervasyon Bulunmamaktadir</Text>
//             </CardBody>
//             <CardFooter>
//               <Button
//                 onClick={() => navigate("/discover")}
//                 size="md"
//                 width="200px"
//                 bg="rgb(248, 179, 51)"
//                 color="#fff"
//                 fontWeight="regular"
//                 fontSize="small"
//                 _hover={{ bg: "orange" }}
//               >
//                 Restoranlari Keşfet
//               </Button>
//             </CardFooter>
//           </Card>
//         </Stack>
//       )}
//     </Fragment>
//   );
// };

// export default ReservationCard;
