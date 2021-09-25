import React from "react";
import { Line } from "react-chartjs-2";
import HealthSideMenu from "../health-sidemenu/health-sidemenu";
import UserNavbar from "../user-navbar/user-navbar";
import "../landing-page/landing-page.css";
import "./chart.css";

const state = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	datasets: [
		{
			label: "Body Weight (Kg) ",
			fill: true,
			lineTension: 0.5,
			backgroundColor: "#f09fc7",
			borderColor: "rgba(0,0,0,1)",
			borderWidth: 2,
			data: [65, 64, 63, 61, 66, 64, 62, 63, 61, 65, 62, 60],
		},
	],
};

export default class BodywtChart extends React.Component {
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
				<div className="d-flex mt-5 pb-0 text-center">
					<table>
						<tr>
							<th>Month</th>
							<th>Body Weight</th>
						</tr>
						<tr>
							<td>January</td>
							<td>65</td>
						</tr>
						<tr>
							<td>February</td>
							<td>64</td>
						</tr>
						<tr>
							<td>March</td>
							<td>63</td>
						</tr>
						<tr>
							<td>April</td>
							<td>61</td>
						</tr>
						<tr>
							<td>May</td>
							<td>66</td>
						</tr>
					</table>
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
							placeholder="Enter your body weight"
							required
						/>
						<input
							id="submit"
							type="submit"
							value="Submit Now"
							className="button"
						/>
					</form>
					<p>Keep Your Body Weight Data Here</p>
				</div>
			</>
		);
	}
}
