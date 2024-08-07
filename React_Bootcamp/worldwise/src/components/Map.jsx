import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h3>{lat}</h3>
      <h3>{lng}</h3>
    </div>
  );
};

export default Map;
