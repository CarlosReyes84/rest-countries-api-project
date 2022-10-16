import { Header } from "./header";
import { Routes } from "../Routes/app.routing";

export const Layout = ({ mode, setMode, countries, loading }) => {
  return (
    <>
      <div className="App" id={mode}>
        <Header mode={mode} changeMode={setMode} />

        <Routes countries={countries} loading={loading} />
      </div>
    </>
  );
};
