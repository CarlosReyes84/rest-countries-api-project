import { Header } from "./header";
import { Search } from "./Search";
import { Route } from "wouter";
import { Countryinfo } from "./Countryinfo";


export const Layout =({mode, setMode, countries, loading}) => {

   return (
    <>
        <div className="App" id={mode}>
        <Header mode={mode} changeMode={setMode} />

        <Route path="/">
            {() => <Search data={countries} loading={loading} />}
        </Route>

        <Route path="/:country1">
            {(params) => <Countryinfo param={params} data={countries} />}
        </Route>
        </div>

    </>
   )
}