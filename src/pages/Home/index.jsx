import React from "react";

import NavBar from "../../components/NavBar";
import styles from "./Home.module.css";
import daha from "../../assets/daha_logo.png";
import profileIcon from "../../assets/profile_icon.png";
import oval from "../../assets/oval.png";
import FeaturedRow from "../../components/FeaturedRow";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={daha} alt="daha icon" />
        </div>
        <div className={styles.userProfile}>
          <img src={profileIcon} alt="profile icon" />
          <img className={styles.userSignIn} src={oval} alt="oval" />
        </div>
      </div>
      <section>
        <FeaturedRow />
      </section>
      <section></section>
      <NavBar />
    </div>
  );
};

export default index;
