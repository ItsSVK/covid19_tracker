import React from "react";
import { Typography } from "@material-ui/core";

import styles from "./CopyRightText.module.css";

function CopyRightText() {
  return (
    <div className={styles.container}>
      <Typography color="textSecondary">
        Developed By Shouvik Mohanta, Datas are taken from{" "}
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://covid19.mathdro.id/api"
        >
          COVID19 MATHDRO
        </a>
      </Typography>
    </div>
  );
}

export default CopyRightText;
