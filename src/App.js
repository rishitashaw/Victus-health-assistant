import LoginPage from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Home from "./pages/home";
import Hospital from "./pages/hospital";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <ProtectedRoute exact path="/hospital" component={Hospital} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
