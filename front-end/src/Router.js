import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
