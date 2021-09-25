import LoginPage from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Home from "./pages/home";
import Hospital from "./pages/hospital";
import ProtectedRoute from "./components/protectedRoute";
import HealthInfoPage from "./pages/health-info";
import PolicyInfoPage from "./pages/policy";
import SugarChart from "./components/charts/sugar-chart";
import BodywtChart from "./components/charts/body-weight";
import BloodPressureChart from "./components/charts/bp-chart";
import ThyroidChart from "./components/charts/thyroid";
import OxygenChart from "./components/charts/oxygen-chart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/health-info" component={HealthInfoPage} />
          <Route exact path="/policy-info" component={PolicyInfoPage} />
          <ProtectedRoute exact path="/hospital" component={Hospital} />
          <Route exact path="/body-wt">
            <BodywtChart />
          </Route>
          <Route path="/blood-sugar">
            <SugarChart />
          </Route>
          <Route path="/blood-pressure">
            <BloodPressureChart />
          </Route>
          <Route path="/oxygen-level">
            <OxygenChart />
          </Route>
          <Route path="/thyroid">
            <ThyroidChart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
