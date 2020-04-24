import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import styles from "./GoogleMap.module.css";
import covid19 from "../../images/covid19.png";

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
        textAlign: "center",
      }}
    >
      <img src={covid19} alt="covid" className={styles.covid19Img} />
      {singleCountry.stats.deaths}
    </div>
  ));

  return (
    <div
      className={styles.mapContainer}
      style={{ height: "100vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
        defaultCenter={{ lat: 47.6186897, lng: -121.8998614 }}
        defaultZoom={4}
      >
        {countriesLocations}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
