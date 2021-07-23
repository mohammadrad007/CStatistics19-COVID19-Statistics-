import { Grid } from "@material-ui/core";
import Navbar from "./../Navbar/Navbar";

import "./footer.css";

import github from "./../../assesst/icons/github.svg";
import gmail from "./../../assesst/icons/gmail.svg";
import instagram from "./../../assesst/icons/instagram.svg";
import stack from "./../../assesst/icons/stack.svg";
import twitter from "./../../assesst/icons/twitter.svg";

const Footer = () => {
  return (
    <Grid container className="footerContainer">
      <Grid item xs={12}>
        <Navbar logo={false} />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Grid item md={3} xs={12} className="socialMedia">
          <ul className="socialMediaBox">
            <li>
              <a href="/">
                <img src={github} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={gmail} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={stack} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item md={3} xs={12} className="footerContent">
          <p>
            Fake Text: Over 300 researchers and specialists gather and
            double-check every statistic we publish. Experts provide country and
            industry-based forecasts.
          </p>
          <p>
            Fake Text: Over 300 researchers and specialists gather and
            double-check every statistic we publish. Experts provide country and
            industry-based forecasts.
          </p>
        </Grid>
        <Grid item md={4} xs={12} className="footerContent">
          <p>
            Fake Text: Over 300 researchers and specialists gather and
            double-check every statistic we publish. Experts provide country and
            industry-based forecasts.
          </p>
          <p>
            Fake Text: Over 300 researchers and specialists gather and
            double-check every statistic we publish. Experts provide country and
            industry-based forecasts.
          </p>
          <p>
            Fake Text: Over 300 researchers and specialists gather and
            double-check every statistic we publish. Experts provide country and
            industry-based forecasts.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
