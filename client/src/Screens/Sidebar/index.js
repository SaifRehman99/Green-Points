import React from "react";
import styles from "./Sidebar.module.css";

const index = () => {
  return (
    <div className={styles.sideMenu}>
      <div>
        <div className={styles.menu}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Sidebar/bx-analyse.png`}
            alt="Header Logo"
          />{" "}
          Dashboard
        </div>
            <div className={styles.menu}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Sidebar/recycle-trash.svg`}
            alt="Side_icon"
          />
          Green Points
        </div>
            <div className={styles.menu}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Sidebar/bx-right-arrow.svg`}
            alt="Side_icon"
          />
          Routes
        </div>

            <div className={styles.menu}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Sidebar/bx-book-open.svg`}
            alt="Side_icon"
          />
          Knowledge Base
        </div>

            <div className={styles.menu}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Sidebar/bx-user.svg`}
            alt="Side_icon"
          />
          My Profile
        </div>
      </div>

      <div>
            <div className={styles.menu}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Sidebar/bx-log-out-circle.svg`}
            alt="Side_icon"
          />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default index;
