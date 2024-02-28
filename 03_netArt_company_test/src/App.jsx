/* eslint-disable no-unused-vars */
// import { useState } from "react";
import world from "/icon1.png";
import contact from "/icon2.png";
import facebook from "/icon3.png";
import logo from "/logo.png";
import trophy from "/p1.png";
import award from "/p2.png";
import products from "/p3.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="award-section">
          <div className="trophy">
            <img src={trophy} alt="trophy image" className="trophy-img" />
          </div>
          <div className="award">
            <ul>
              <h1 className="heading">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                FOR THE 4th TIME.
              </h1>

              <li>
                C.R.I.&apos;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={award} alt="award image" className="award-img" />
            <p>
              Government of India has awarded the
              <b> &quot;National Energy Conservation Award 2018.&quot;</b> Mr.
              G. Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>

        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="products">
          <img src={products} alt="" className="products-img" />
          <p className="products-names">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className="divider" />

        <div className="category">
          <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
          <p>
            CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS |
            PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE |
            METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES |
            SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
      <footer className="footer">
        <div>
          <a href="#">
            <span className="contact-icon">
              <img src={contact} alt="contact-img" />
            </span>
            Toll free 1800 200 1234
          </a>
        </div>

        <div>
          <a href="https://www.facebook.com/cripumps">
            <span>
              <img src={facebook} alt="facebook icon" />
            </span>
            www.facebook.com/cripumps
          </a>
        </div>
        <div>
          <a href="https://www.crigroups.com">
            <span>
              <img src={world} alt="world-icon" />
            </span>
            www.crigroups.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
