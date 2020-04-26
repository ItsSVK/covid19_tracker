import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const CardData = ({ data, lastUpdate, message, title, cardColor }) => (
  <Grid item component={Card} className={cx(styles.card, cardColor)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5">
        <CountUp start={0} end={data} duration={2.5} separator="," />
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="body2">{message}</Typography>
    </CardContent>
  </Grid>
);

export default CardData;
