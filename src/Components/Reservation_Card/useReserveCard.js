import { useState, useEffect } from "react";
import { API_BASE_URL } from "./../../Api/Constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const useReseveCard = () => {
  const params = useParams();
  //----------------Rezerve Edilen Restoranlar Listesi------------------

  const [reserved, setReserved] = useState([]);

  //----------------Rezerve Etmek için Discovera Git--------------------

  const navigate = useNavigate();

  //----------------Rezerve Edilen  Restoranlarin Bilgisi---------------

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/Rezervasyon?kullaniciId=${params.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
    }).then((reserved) => {
      setReserved(reserved.data);
    });
  }, []);

  const handleShow = async () => {};

  const handleCancel = async () => {};

  return {
    handleCancel,
    handleShow,
    reserved,
  };
};
