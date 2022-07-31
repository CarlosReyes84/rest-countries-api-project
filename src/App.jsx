import { Usehook } from "./lib/hooks/myhook";
import { useState } from "react";
import { Layout } from "./components/layout";
import "./App.scss";

function App() {
  const [mode, setMode] = useState("light");
  const { countries, loading } = Usehook();
  const props = { mode, setMode, countries, loading };

  return (
    <div className="App" id={mode}>
      <Layout {...props} />
    </div>
  );
}

export default App;
