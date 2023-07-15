import React, { Fragment } from "react";
import {
  Stack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

const Quetions = () => {
  const Quetion = ({ quetion, reply }) => {
    return (
      <Accordion allowToggle bg="#fff" w={["350px", "400px", "500px", "800px"]}
      marginTop={30}>
        <AccordionItem>
          <Text>
            <AccordionButton _expanded={{ bg: "gray.200" }} h="80px">
              <Box
                flex="1"
                textAlign="center"
                fontWeight="bold"
                fontSize="16px"
                color="rgb(0,0,0,0.7)" 
              >
                {quetion}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel p="20px 40px" fontSize="14px">
            {reply}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <Fragment>
      <Stack
        w="100%"
        h="100%"
        textAlign="center"
        spacing="14"
        alignItems="center"
        pb="100px"
      >
        <Heading
          color="rgb(0,0,0,0.6)"
          fontWeight="600"
          fontFamily={'"Kaushan Script", cursive'}
          marginTop={150}
        >
          SIKLIKÇA SORULANLAR
        </Heading>

        <Stack
          h="100%"
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing="6"
        >
          {/*-------------------------------QUEİTONS------------------------------- */}

          <Quetion
            quetion={<Heading fontSize="16px">ORTAYAKARIŞIK NEDİR</Heading>}
            reply={
              <Text>
                OrtayaKarışık, akşam yemeklerini dünyanın en iyi restoranlarından
                bazılarıyla buluşturan bir restoran rezervasyon platformudur.
                Gurmelerin restoranları keşfetmesi, masa ayırtması ve yemek
                yemesi için bir yer.
              </Text>
            }
          />

          <Quetion
            quetion={
              <Heading fontSize="16px">MASA AYIRMAK ÜCRETSİZ Mİ?</Heading>
            }
            reply={
              <Text>
                OrtayaKarışık kullanmak tamamen ücretsizdir! Bu, akşam yemeklerinin
                ücretsiz olarak masa ayırtabileceği anlamına gelir. Bazen bir
                restoranın iptal politikası nedeniyle, bir lokantanın
                rezervasyon sırasında kredi kartı bilgilerini vermesi
                gerekebilir. Politikaya bağlı olarak, geç iptal veya
                rezervasyonun kullanılmaması durumunda karttan ücret alınabilir.
              </Text>
            }
          />

          <Quetion
            quetion={
              <Heading fontSize="16px">
                REZERVASYONLARIMI NASIL DÜZENLEYEBİLİR VEYA İPTAL EDEBİLİRİM?
              </Heading>
            }
            reply={
              <Text>
                Tüm müşteriler, rezervasyon yaptıktan sonra aldıkları Rezztoran
                onay e-postası aracılığıyla rezervasyonlarını kolayca
                düzenleyebilir veya iptal edebilirler. E-postada, müşteriler
                rezervasyonlarını Değiştir veya İptal et seçebilirler.
                Seçildiğinde, müşteriler süreci tamamlamak için Rezztoran web
                sitesine yönlendirilecektir. Yemek yiyenler daha sonra
                güncellemelerini onaylayan bir e-posta alacak.
                Rezttoran web sitesinde veya Rezztoran uygulamalarında
                hesaplarına giriş yaptıktan sonra, yemek yiyenler Kullanıcı
                Profilinin Rezervasyonlar sekmesine gidebilirler. Daha sonra
                istedikleri rezervasyonu bulabilir ve Rezervasyonu düzenle veya
                İptal et seçebilirler. Yemek yiyenler daha sonra
                güncellemelerini onaylayan bir e-posta alacak.
              </Text>
            }
          />

        </Stack>
      </Stack>
    </Fragment>
  );
};

export default Quetions;
