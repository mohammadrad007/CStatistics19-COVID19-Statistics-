import { Card, CardContent, Typography } from "@material-ui/core";

import "./infoBox.css";

const InfoBox = ({
  title,
  cases,
  type,
  casesType,
  total,
  active,
  ...props
}) => {
  console.log(casesType);
  return (
    <Card
      className={`infoBox ${active && `active`} ${casesType}`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBoxCases ${type}`}>{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
