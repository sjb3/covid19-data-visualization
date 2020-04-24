import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import styles from "./GoogleMap.module.css";

const GoogleMap = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const results = axios
      .get("https://corona.lmao.ninja/v2/jhucsse")
      // .then((res) => console.log(res.data))
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err));
  }, []);

  const countriesLocations = results.map((singleCountry, i) => (
    <div
      className={styles.countryMarker}
      key={i}
      lat={singleCountry.coordinates.latitude}
      lng={singleCountry.coordinates.longitude}
      style={{
        color: "red",
        fontStyle: "bold",
        background: "white",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        display: "inline - block",
      }}
    >
      {singleCountry.stats.confirmed}
    </div>
  ));

  return (
    <div
      className={styles.mapContainer}
      style={{ height: "100vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBoPRhW13L62WKvBp6_A8caj-JtFIm3mhg" }}
        defaultCenter={{ lat: 47.6186897, lng: -121.8998614 }}
        defaultZoom={4}
      >
        {countriesLocations}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
