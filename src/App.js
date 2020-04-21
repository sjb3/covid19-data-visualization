// import React, { useEffect, useState } from "react";
// import { Cards, Chart, CountryPicker } from "./components";
// import styles from "./App.module.css";
// import { fetchData } from "./api";

// function App() {
//   const [something, setSomething] = useState({})

//   // useEffect(() => {
//   //   const fetchedData = fetchData();
//   //   // console.log("data >>>", data);
//   //   this.setState({ data: fetchedData });
//   // });

//   return (
//     const { data } = this.state;

//     <div className={styles.container}>
//       <Cards data={data} />
//       <Chart />
//       <CountryPicker />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log("fetchedData >>>", fetchedData);
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
