import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const { cities, isloading } = useCities();
  if (!cities.length) {
    return <Message message="Add your first city from the map." />;
  }

  const countries = cities.reduce((arr, curr) => {
    if (!arr.map((element) => element.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji: curr.emoji }];
    } else {
      return arr;
    }
  }, []);

  if (isloading) {
    return <Spinner />;
  } else {
    return (
      <ul className={styles.countryList}>
        {countries.map((country) => {
          return <CountryItem country={country} key={country} />;
        })}
      </ul>
    );
  }
};

export default CountryList;
