import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Register from "../pages/Register";
import Login from "../pages/Login";
export default function Browser() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route component={Register} exact path="/register" />
          <Route component={Login} path="/login" />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}
