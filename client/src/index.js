import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartBar,
  faArrowUp,
  faChartPie,
  faArrowDown,
  faUsers,
  faPercent,
  faSearch,
  faEllipsisV,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";

library.add(
  faChartBar,
  faArrowUp,
  faChartPie,
  faArrowDown,
  faUsers,
  faPercent,
  faSearch,
  faEllipsisV,
  faAngleLeft,
  faAngleRight
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
