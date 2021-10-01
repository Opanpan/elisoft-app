import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { isLogin } from "./utils";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard} exact /> */}
    </Switch>
  );
}
