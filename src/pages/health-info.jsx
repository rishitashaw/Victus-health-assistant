import HealthSideMenu from "../components/health-sidemenu/health-sidemenu";
import UserNavbar from "../components/user-navbar/user-navbar";
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom";

export default function HealthInfoPage() {
  return (
    <>
      <UserNavbar />
      <div className="container-fluid mt-5 pt-5 text-center">
        <div className="row">
          <div className="col-4">
            <HealthSideMenu />
          </div>
          <div className="col-8">Hello</div>
        </div>
      </div>
    </>
  );
}
