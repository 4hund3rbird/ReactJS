import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Appnav from "./Appnav";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Appnav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise.inc
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
