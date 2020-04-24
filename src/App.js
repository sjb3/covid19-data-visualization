import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker, GoogleMap } from "./components";
import { fetchData } from "./api";
import covid from "./images/covid.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log("data-app", data);
    this.setState({ data: fetchedData });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={covid} alt="covid" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <GoogleMap />
      </div>
    );
  }
}
