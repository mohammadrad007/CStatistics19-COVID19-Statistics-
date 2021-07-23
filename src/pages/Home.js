import { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

import Header from "./../components/Header/Header";
import InfoBox from "./../components/InfoBox/InfoBox";
import Map from "./../components/Map/Map";
import Table from "./../components/Table/Table";
import LineGraph from "./../components/LineGraph/LineGraph";
import Footer from "./../components/Footer/Footer";

import { prettyPrintStat, sortData } from "../common/utils/util";

import "./home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/all`)
      .then((res) => res.json())
      .then((data) => setCountryInfo(data));
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(`https://disease.sh/v3/covid-19/countries
       `)
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setTableData(sortData(data));
          setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
    const url =
      countryCode === "worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
        setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
        setMapZoom(4);
      });
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12} className="app" spacing={2}>
        <Grid item md={8} xs={12}>
          <Grid container item xs={12} spacing={2} className="homeHeader">
            <h1>
              COVID 19 Map and Statistics <span>(Daily)</span>
            </h1>

            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.value} key={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} className="homeStats">
            <InfoBox
              active={casesType === "cases"}
              casesType={casesType}
              type="cases"
              title="coronavirous Cases"
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={prettyPrintStat(countryInfo.cases)}
              onClick={(e) => setCasesType("cases")}
            />
            <InfoBox
              active={casesType === "recovered"}
              casesType={casesType}
              type="recovered"
              title="Recovered"
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={prettyPrintStat(countryInfo.recovered)}
              onClick={(e) => setCasesType("recovered")}
            />
            <InfoBox
              active={casesType === "deaths"}
              casesType={casesType}
              type="deaths"
              title="Death"
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={prettyPrintStat(countryInfo.deaths)}
              onClick={(e) => setCasesType("deaths")}
            />
          </Grid>

          <Grid item xs={12}>
            <Map
              casesType={casesType}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
            />
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card>
            <CardContent className="cardHome">
              <h3>Live Cases by Countary</h3>
              <Table countries={tableData} />
              <h3>Worldwide new {casesType}</h3>
              <LineGraph casesType={casesType} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
