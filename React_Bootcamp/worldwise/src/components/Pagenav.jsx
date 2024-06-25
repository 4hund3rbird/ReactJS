import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
const Pagenav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className={styles.list}>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagenav;
