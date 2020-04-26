import React from "react";
import CardData from "./CardData";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className={styles.container}>
      <CardData
        xs={12}
        md={3}
        data={confirmed.value}
        lastUpdate={lastUpdate}
        message="Number of Active Cases of Covid-19"
        title="Infected"
        cardColor={styles.infected}
      />
      <CardData
        xs={12}
        md={3}
        data={recovered.value}
        lastUpdate={lastUpdate}
        message="Number of Recoveries from Covid-19"
        title="Recovered"
        cardColor={styles.recovered}
      />
      <CardData
        xs={12}
        md={3}
        data={deaths.value}
        lastUpdate={lastUpdate}
        message="Number of Deaths caused by Covid-19"
        title="Deaths"
        cardColor={styles.deaths}
      />
    </div>
  );
};

export default Cards;
