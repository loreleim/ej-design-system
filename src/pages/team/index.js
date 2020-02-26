import React from "react";
import style from "./index.module.scss";

class Team extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.homeContainer}>
          <div className={style.searchContainer}>
            <h2 className={style.subTitle}>The design system</h2>
            <h1 className={style.mainTitle}>Team</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
