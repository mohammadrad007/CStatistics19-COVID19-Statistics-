import Numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else if (a.cases < b.cases) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedData;
};

const caseTypeColors = {
  cases: {
    hex: "#539287ed",
    multiplier: 300,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 300,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 300,
  },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${Numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      key={country.country}
      fillOpacity={0.4}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={caseTypeColors[casesType].hex}
      fillColor={caseTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * caseTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confrimed">
            Cases: {Numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {Numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {Numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
