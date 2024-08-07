import { NavLink } from "react-router-dom";
import styles from "./CityItem.module.css";

const CityItem = ({ city }) => {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  const { cityName, emoji, date, position } = city;
  return (
    <li>
      <NavLink
        to={`${city.id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityItem}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </NavLink>
    </li>
  );
};

export default CityItem;
