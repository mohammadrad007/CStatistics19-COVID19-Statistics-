import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  options,
  setBorderColor,
} from "./../../common/LinGraphHelper/lineGraphHelper";

const LineGraph = ({ casesType = "cases" }) => {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }

    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=120`)
        .then((res) => res.json())
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: setBorderColor(casesType),
                borderColor: setBorderColor(casesType),
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
