import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from '../components/layout';
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges.js";
import BadgeEdit from "../pages/BadgeEdit.js";
import BadgeDetails from "../pages/BadgeDetails.js";
import NotFound from '../components/NotFound';
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
        <Route exact path="/badges/:badgeId" component={BadgeDetails} />
        <Route component={NotFound}/>
      </Switch>

        </Layout>
    </BrowserRouter>
  );
}
export default App;

