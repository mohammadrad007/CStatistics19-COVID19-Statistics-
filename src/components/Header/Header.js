import { Grid } from "@material-ui/core";
import Navbar from "./../Navbar/Navbar";

import "./header.css";

const Header = () => {
  return (
    <Grid container className="headerContainer">
      <Grid item xs={12}>
        <Navbar logo={true} />
      </Grid>
      <Grid item xs={12} className="headerContent">
        <h2>Statistics CoronaVirous</h2>
        <p>New cases and deaths in world</p>
      </Grid>
      <Grid item xs={12}>
        <svg
          className="homeBgWave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 50"
          space="preserve"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="homeBgWave__background"
            d="M0,50h1920c0,0-320-35-640-35S960,27.5,640,27.5S320,10,0,10V50z"
          ></path>
          <path
            className="homeBgWave__wave"
            d="M0,20c320,0,320,15,640,15s320-15,640-15s640,30,640,30s-320-40-640-40S966,20,640,20S314,0,0,0V20z"
          ></path>
        </svg>
      </Grid>
    </Grid>
  );
};

export default Header;
