import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.flex}>
      <div className={styles.leftHeader}>
        <div className={styles.flexChild}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Header/Group_1.svg`}
            alt="Header Logo"
            className={styles.logo}
          />
          <h5 className={styles.logoHeading}>calypso :))))</h5>
        </div>

        <div className={styles.flexChild}>
          <p className={styles.paragraph}>Home</p>
          <p className={styles.paragraph}>How It Works</p>
          <p className={styles.paragraph}>Team</p>
          <p className={styles.paragraph}>Sponsors</p>
          <p className={styles.paragraph}>News</p>
          <p className={styles.paragraph}>Contact Us</p>
        </div>
      </div>

      <div className={styles.flexChild}>
        <div className={styles.avatarContainer}>
          <h3>Kristin Robertson</h3>
          <span>User</span>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/icons/Header/bx-chevron-down.svg`}
          alt="Dropdown"
          style={{ marginRight: "10px" }}
        />

        <img
          src={`${process.env.PUBLIC_URL}/icons/Header/Avatar.svg`}
          alt="Avatar"
          className={styles.avatar}
        />
      </div>
    </header>
  );
};

export default Header;
