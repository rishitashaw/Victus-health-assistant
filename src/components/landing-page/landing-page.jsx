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
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Working
                  </a>
                </li>

                <li>
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Admin
                  </a>
                </li>
                <li className="button">Get Victus</li>
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
                src="https://www.youtube-nocookie.com/embed/_wQTRMBAvzg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowfullscreen
              ></iframe>
            </div>

            <div className="without-vpn">
              <h3>Without Victus</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                perspiciatis animi quam esse tenetur, tempore, sequi aut earum
                impedit cumque error at iure, eaque dolores! Consectetur
                molestiae delectus nostrum eum.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container flex col-flex">
            <div className="exp-pricing">
              <h2>Know our Objective</h2>

              <h3>Huge Global Network of DApps</h3>
              <p>
                See <span className="s-vpn">Victus</span> everywhere <br />
                to make it easier for you when you save new information
              </p>
              <img
                className="companies"
                src="https://github.com/balaga-yavanika/balagayavanika.github.io/blob/main/Images/companies.png?raw=true"
                alt="companies"
              />
            </div>

            <img
              className="map"
              src="https://github.com/balaga-yavanika/balagayavanika.github.io/blob/main/Images/World-map.png?raw=true"
              alt="world map"
            />
            <div className="p-plans flex mob-flex">
              <div className="plans uno-tres pr-flex" id="o-month">
                <h5 className="level-dark d-flex">1 Month</h5>
                <h2>
                  <span className="d-shaded">USD</span>12.95
                  <span className="d-shaded">/mo</span>
                </h2>
                <strong>USD 12.95 /mo</strong>
                <p>
                  Billed every month. Additional taxes may apply depending on
                  your jurisdiction.
                </p>
                <button className="dark-button">Get Started</button>
              </div>

              <div className="plans dos pr-flex" id="t-month">
                <h5 className="level d-flex">24 Months</h5>
                <h2>
                  <span className="l-shaded">USD</span> 2.49{" "}
                  <span className="l-shaded">/mo</span>
                </h2>
                <strong>
                  <s className="l-shaded">USD 12.95 /mo</s>
                </strong>
                <p>
                  Billed USD 59.76 now, & annually after the first 24
                  months.Additional taxes may apply depending on your
                  jurisdiction.
                </p>
                <button className="light-button">Get Started</button>
              </div>

              <div className="plans uno-tres pr-flex" id="s-month">
                <h5 className="level-dark d-flex">6 Months</h5>
                <h2>
                  <span className="d-shaded">USD</span>6.49
                  <span className="d-shaded">/mo</span>
                </h2>
                <strong>
                  <s className="d-shaded">USD 12.95 /mo</s>
                </strong>
                <p>
                  Billed USD 38.94 every 6 months. Additional taxes may apply
                  depending on your jurisdiction.
                </p>
                <button className="dark-button">Get Started</button>
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
