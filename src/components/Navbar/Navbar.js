import { Grid } from "@material-ui/core";

import "./navbar.css";
const Navbar = ({ logo }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {logo && (
          <p className="logo">
            CStatistics19 <span>(COVID19 Statistics)</span>
          </p>
        )}
        <nav className="navbarContainer">
          <ul className="navbar">
            <li>Home</li>
            <li>Abou me</li>
            <li>DOCs</li>
            <li>Contant</li>
          </ul>
        </nav>
      </Grid>
    </Grid>
  );
};

export default Navbar;
