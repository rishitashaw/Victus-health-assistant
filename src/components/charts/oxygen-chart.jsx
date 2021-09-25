import React from "react";
import { Line } from "react-chartjs-2";
import HealthSideMenu from "../health-sidemenu/health-sidemenu";
import UserNavbar from "../user-navbar/user-navbar";
import "../landing-page/landing-page.css";

const state = {
	labels: ["20/06 ", "21/06", "22/06", "23/06", "24/06", "25/06", "26/06"],
	datasets: [
		{
			label: "Oxygen Level",
			fill: true,
			lineTension: 0.5,
			backgroundColor: "#f09fc7",
			borderColor: "rgba(0,0,0,1)",
			borderWidth: 2,
			data: [98, 97, 96, 97, 98, 99, 94],
		},
	],
};

export default class OxygenChart extends React.Component {
	render() {
		return (
			<>
				<UserNavbar />

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
					<form
						id="form"
						className="flex"
						action="https://www.freecodecamp.com/email-submit"
					>
						<input
							name="email"
							id="email"
							type="email"
							placeholder="Enter your Oxygen Level"
							required
						/>
						<input
							id="submit"
							type="submit"
							value="Submit Now"
							className="button"
						/>
					</form>
					<p>Keep Your Oxygen Level Data Here</p>
				</div>
			</>
		);
	}
}
