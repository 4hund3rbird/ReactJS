import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

import Message from "./Message";

const CityList = ({ cities, isloading }) => {
  if (!cities.length) {
    return <Message message="Add your first city from the map." />;
  }

  if (isloading) {
    return <Spinner />;
  } else {
    return (
      <ul className={styles.cityList}>
        {cities.map((city) => {
          return <CityItem city={city} key={city.id} />;
        })}
      </ul>
    );
  }
};

export default CityList;
