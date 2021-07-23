import Numeral from "numeral";
import "./table.css";

const Table = ({ countries }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map((country) => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td>
                <strong>Cases: </strong> {Numeral(country.cases).format("0.0a")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
