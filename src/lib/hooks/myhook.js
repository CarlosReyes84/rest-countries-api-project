import { useState, useEffect } from "react";
import { getResponse } from "../../services/api";


export function UseData() {

  const [countries, setcountries] = useState([]);
  const [loading, setloading] = useState(false);


    useEffect(() => {
        setloading(true);
        getResponse().then((data) => {
          setcountries(data);
          setloading(false);
        });
      }, []);


    return {countries, loading};
}