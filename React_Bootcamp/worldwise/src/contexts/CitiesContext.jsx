import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setcities] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch("http://localhost:8000/cities").then((res) => {
      res.json().then((data) => {
        setcities(data);
      });
    });
    setloading(false);
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const value = useContext(CitiesContext);
  return value;
}

export { CitiesProvider, useCities };
