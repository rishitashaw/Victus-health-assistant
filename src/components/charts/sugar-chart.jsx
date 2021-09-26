import React from "react";
import { Line } from "react-chartjs-2";
import HealthSideMenu from "../health-sidemenu/health-sidemenu";
import UserNavbar from "../user-navbar/user-navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../landing-page/landing-page.css";

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
  ],
  datasets: [
    {
      label: "Blood Sugar Level (mg/dl)",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "#f09fc7",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [135, 141, 126, 131, 136, 134, 142, 136],
    },
  ],
};
let notify = () =>
  toast("Your blood sugar level is low! Please visit a doctor");

export default class SugarChart extends React.Component {
  render() {
    return (
      <>
        <UserNavbar />
        <ToastContainer />

        <div className="container-fluid mt-5 pt-5 text-center">
          <div className="row">
            <div className="col-4">
              <HealthSideMenu />
            </div>

            <div className="col-8">
              <Line
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-section d-flex mt-5 pt-5">
          <form id="form" className="flex">
            <input
              name="email"
              id="email"
              type="text"
              placeholder="Enter your Blood Sugar Level"
              required
            />
          </form>
          <button className="button m-2" onClick={notify}>
            Submit!
          </button>
          <p>Keep Your Blood Sugar Level Data Here</p>
        </div>
      </>
    );
  }
}
