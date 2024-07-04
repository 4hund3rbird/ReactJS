import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const App = () => {
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isloading={loading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isloading={loading} />}
            />
            <Route path="countries" element={<p>list of Countries</p>} />
            <Route path="form" element={<p>Form for filling</p>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
