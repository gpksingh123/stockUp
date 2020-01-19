import React, { Component } from "react";
import Chart from "react-apexcharts";
import Stat from "./Stat.jsx"


class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    let options = {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        type: "datetime"
      }
    },
      series = [
        {
          name: "Actual Stock Price",
          data: this.props.data.data
        },
        {
          name: "Simple Moving Average",
          data: this.props.data.avg
        }
      ]
    return (
      <div id = "app" className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="line"
              width="1000"
            />
          </div>
        </div>
        <div >
          <Stat></Stat>
        </div>
      </div>
    );
  }
}

export default Line;