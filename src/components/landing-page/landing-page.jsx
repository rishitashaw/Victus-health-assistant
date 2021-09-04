import "./landing-page.css";
import { Link } from "react-router-dom";
export default function LandingPageComp() {
	return (
		<body>
			<main id="main">
				<header id="header">
					<div id="navbar" className="container h-flex">
						<div className="logo">
							<h1>Victus</h1>
						</div>
						<nav id="nav-bar">
							<ul id="navigation">
								<li>
									<a className="nav-link" href="/home">
										Home
									</a>
								</li>
								<li>
									<a className="nav-link" href="#working">
										Working
									</a>
								</li>

								<li>
									<a className="nav-link" href="#contact">
										Contact
									</a>
								</li>
								<li>
									<Link to="/hospital">Admin</Link>
								</li>
								<li className="button ml-3">
									<Link to="/login">Login</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>

				<section id="home">
					<div className="container grid">
						<div className="showcase-text">
							<br />
							<h2>
								The <strong>DApp</strong> <br /> that saves <br />
								your <span className="product-name">medical</span>
								<br />
								history.
							</h2>
							<p>
								This project is based on blockchain application for keeping
								track of a person’s medical history.
								<br />
								<span className="s-vpn">Victus</span> discover interesting
								features from us
							</p>
							<p>
								that aims at helping out clients for maintaining their records
								and safeguards them against any frauds.
							</p>
							<br />
						</div>

						<div className="illustration">
							<img
								src="https://www.reveation.io/uploads/Technology/Techno/blockchain.svg"
								alt="Get secured with Supreme VPN Illustration"
								width="300px"
								height="auto"
							/>
						</div>

						<div className="form-section d-flex">
							<form
								id="form"
								className="flex"
								action="https://www.freecodecamp.com/email-submit"
							>
								<input
									name="email"
									id="email"
									type="email"
									placeholder="Enter your email address"
									required
								/>
								<input
									id="submit"
									type="submit"
									value="Get Started"
									className="button"
								/>
							</form>
							<p>Keep Your Data Safe on blockchain</p>
						</div>
					</div>
				</section>

				<section id="working">
					<div className="container flex col-flex">
						<div className="vpn-working">
							<h2>DApp explained in seconds</h2>

							<h3>How does a Blockchain work?</h3>
							<p>
								A blockchain is “a distributed database that maintains a
								continuously growing list of ordered records, called blocks.”
							</p>

							<h3>With Victus</h3>
							<p>
								Victus will ensure that the users will not be fooled or cheated
								from the hospital’s side. In case if they try to manipulate the
								bill, victus dapp will not let that happen. Moreover clients
								,who maintain their medical records on victus ,even after
								displacing their phone or mobile number can access their records
								through their Id.
							</p>
						</div>

						<div className="video-vpn">
							<iframe
								id="video"
								width="560"
								height="315"
								src="https://www.youtube-nocookie.com/embed/3df8BYMB8y0"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
								allowfullscreen
							></iframe>
						</div>

						<div className="without-vpn">
							<h3>Without Victus</h3>
							<p>
								Your medical records may get lost or maybe Insurance companies
								can charge you for something which you didnt buy/undergo.
							</p>
						</div>
					</div>
				</section>

				<section id="pricing">
					<div className="container flex col-flex">
						<div className="exp-pricing mb-4">
							<h2>Know our Objectives</h2>
						</div>

						<img
							className="map"
							src="https://github.com/balaga-yavanika/balagayavanika.github.io/blob/main/Images/World-map.png?raw=true"
							alt="world map"
						/>
						<div className="p-plans flex mob-flex">
							<div className="plans uno-tres pr-flex" id="o-month">
								<h5 className="level-dark d-flex">#1</h5>

								<p>
									To protect you from fraudulent charges and to ensure your data
									is secure
								</p>
								<button className="dark-button">Get Started</button>
							</div>

							<div className="plans dos pr-flex" id="t-month">
								<h5 className="level d-flex">#2</h5>
								<p>
									To provide a secure and reliable storage for all your medical
									records.
								</p>
								<button className="light-button">Explore Client Dapp</button>
							</div>

							<div className="plans uno-tres pr-flex" id="s-month">
								<h5 className="level-dark d-flex">#3</h5>

								<p>
									To provide a secure network to hospitals to manage huge amount
									of medical records of their patients.
								</p>
								<button className="dark-button">Explore Hospital DApp</button>
							</div>
						</div>
					</div>
				</section>

				<section id="subscribe">
					<div className="wrapper container sub-flex">
						<div className="content">
							<h3>Subscribe Now to Get Special Features!</h3>
							<p>Subscribe with us and find the fun.</p>
						</div>
						<button className="button">Subscribe Now</button>
					</div>
				</section>

				<footer id="contact">
					<section className="container grid">
						<div className="footer-image mob-flex start-flex">
							<h1>Victus</h1>
							<p>
								<span className="s-vpn">Victus</span> is a DApp that has unique
								features and has high security
							</p>
						</div>

						<div className="footer-sample-links flex">
							<ul className="flex">
								<li>
									<a href="#working">Working</a>
								</li>

								<li>
									<a href="#header">Get Victus</a>
								</li>
							</ul>
						</div>

						<div className="footer-social d-flex">
							<h5>Contact us</h5>
							<ul className="socials flex">
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>

						<div className="footer-cr d-flex">
							<p>&copy; 2021 Victus | Terms of Service | Privacy Policy</p>
							<b>
								Design & Code • with <i className="fas fa-heart"></i> вч{" "}
								<a
									href="https://codepen.io/Yavi_25"
									target="_blank"
									rel="noopener"
									className="link"
									title="view my CopePen Profile"
								>
									Wrath of God
								</a>
							</b>
						</div>
					</section>
				</footer>
			</main>
		</body>
	);
}
