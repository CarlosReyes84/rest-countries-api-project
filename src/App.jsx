import { Header } from "./components/header";
import { Search } from "./components/Search";
import { Route } from "wouter";
import { getResponse } from "./services/api";
import { useState, useEffect } from "react";
import { Countryinfo } from "./components/Countryinfo";
import "./App.scss";

function App() {

  const [countries, setcountries] = useState([]);
  const [loading, setloading] = useState(false);
  const [mode, setMode] = useState('light');

  useEffect(() => {
    setloading(true);
    getResponse().then((data) => {
      setcountries(data);
      setloading(false);
    });
  }, []);

  
  return (
    <div className="App" id={mode}>

      <Header mode={mode} changeMode={setMode}/>
      
      <Route path="/:country1">
       {(params) => <Countryinfo param={params} data={countries}/>}
      </Route>

      <Route path="/">
       {() => <Search data={countries} loading={loading}/>}
      </Route>
    </div>
  );
}

export default App;
