import { Route, Switch } from "wouter";
import { Search } from "../components/Search";
import { Countryinfo } from "../components/Countryinfo";

export function Routes({ countries, loading }) {
  return (
    <Switch>
      <Route path="/">
        {() => <Search data={countries} loading={loading} />}
      </Route>

      <Route path="/:country1">
        {(params) => <Countryinfo param={params} data={countries} />}
      </Route>
    </Switch>
  );
}
