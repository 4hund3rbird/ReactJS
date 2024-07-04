import styles from "./CityItem.module.css";

const CityItem = ({ city }) => {
  return <div>{city.cityName}</div>;
};

export default CityItem;
