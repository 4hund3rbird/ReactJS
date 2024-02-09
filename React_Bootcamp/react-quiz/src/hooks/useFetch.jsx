import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [questions, setdata] = useState([]);
  useEffect(() => {
    async function getdata() {
      const res = await fetch(url);
      const data = await res.json();
      setdata(data);
    }
    // function getdatawiththen() {
    //   fetch("http://localhost:8000/questions").then((res) => {
    //     res.json().then((data) => {
    //       console.log(data);
    //     });
    //   });
    // }
    getdata();
  }, [url]);

  return questions;
};
