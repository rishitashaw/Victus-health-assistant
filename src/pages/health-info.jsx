import HealthSideMenu from "../components/health-sidemenu/health-sidemenu";
import UserNavbar from "../components/user-navbar/user-navbar";
import "./health-info.css";
export default function HealthInfoPage() {
  return (
    <>
      <UserNavbar />
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-4">
            <HealthSideMenu />
          </div>
          <div className="col-8">
            <h1 class="typing">Hello There!</h1>
            {/* <img src="https://media4.giphy.com/media/uefHVzzi03XWUaU363/giphy.webp?cid=ecf05e47illiwjvewgqobq7jvwdfclj9wzxf3qt3917ls3tv&rid=giphy.webp&ct=s" /> */}
            <img
              className="health-info-img"
              src="https://media2.giphy.com/media/oHvAX3kAmcsh51yNxS/giphy_s.gif?cid=ecf05e47o8wry7ossx9cp5uzj99tflxc5tbscnhbqx75st5f&rid=giphy_s.gif&ct=s"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
