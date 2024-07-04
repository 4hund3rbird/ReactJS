import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
const CityList = ({ cities, isloading }) => {
  if (isloading) {
    return <Spinner />;
  } else {
    return (
      <ul className={styles.CityList}>
        {cities.map((city) => {
          return (
            <li key={city.id}>
              <CityItem city={city} />
            </li>
          );
        })}
      </ul>
    );
  }
};

export default CityList;
