import React, { useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  // async componentDidMount() {
  //    const data = await fetchData()

  //   console.table(data);
  //   }

  useEffect(() => {
    const data = fetchData();
    console.log(data);
  });

  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
