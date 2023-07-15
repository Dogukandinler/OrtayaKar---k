import React, { useEffect, useState, useRef } from "react";
import { Map, GoogleApiWrapper, useGoogleMap } from "google-maps-react";
import axios from "axios";
import { API_BASE_URL } from "../../Api/Constants";

const MapContainer = (props) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_BASE_URL}/kullanici/${localStorage.getItem("currentUser")}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
      },
    }).then((user) => {
      setUserData(user.data);
      console.log(user.data);
    });
  }, []);

  const center = {
    lat: 38.372604,
    lng: 27.130886,
  };

  return (
    <Map
      google={props.google}
      style={{ width: "300px", height: "15%", borderRadius: "10px" }}
      zoom={15}
      objectFit="cover"
      borderRadius="10px"
      initialCenter={center}
    ></Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDvFK-5pJtvAvnEsmBjAlI7GjYYkd0cP_E",
})(MapContainer);
