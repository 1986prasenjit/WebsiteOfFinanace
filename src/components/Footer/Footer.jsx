import React from "react";
import "./Footer.css";
import visa1 from "../../assets/images/visa1.png";
import visa2 from "../../assets/images/visa2.png";
import visa3 from "../../assets/images/visa3.png";
import visa4 from "../../assets/images/visa4.png";
import { Link } from "react-router-dom";
import forest from '../../assets/images/forest.webp'
import sea from '../../assets/images/sea.webp'
import tea from '../../assets/images/tea.webp'
 
function Footer() {
  return (
    <>
      <footer className="footerSection">
        <div className="footerContainer">
          <div className="footerColumn">
            <h3>
              Neuron <span>Finance</span>
            </h3>
            <p>
              Collaboratively create resource-sucking manufactured products and
              worldwide services. Seamlessly mesh B2C functionalities rather
              than intermandated metrics. Energistically innovate open-source
              systems for performance-based tools.
            </p>
            <div className="paymentIcons">
              <img src={visa1} alt="Payment Icon 1" className="paymentIconsImg"/>
              <img src={visa2} alt="Payment Icon 2" className="paymentIconsImg"/>
              <img src={visa3} alt="Payment Icon 3" className="paymentIconsImg"/>
              <img src={visa4} alt="Payment Icon 4" className="paymentIconsImg"/>
            </div>
          </div>
          <div className="footerColumn">
            <h3>Useful Link</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/feature">Feature</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <h3>Latest Post</h3>
            <ul>
              <li className="latestPostLi">
                <img src={forest} alt="Image of a Forest" className="latestPostImg"/>
                <a href="#">Headset No Longer Wire For Sound</a>
                <span>May 2018</span>
              </li>
              <li className="latestPostLi">
              <img src={sea} alt="Image of a Forest" className="latestPostImg"/>
                <a href="#">Comment On Impact of Human Life</a>
                <span>May 2018</span>
              </li>
              <li className="latestPostLi">
              <img src={tea} alt="Image of a Forest" className="latestPostImg"/>
                <a href="#">Best Collabro Offer A Visa Employee</a>
                <span>May 2018</span>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <h3>Newsletter Subscription</h3>
            <p>
              Subscribe to get the latest news, updates, and other information.
              Don’t worry, we won’t send spam!
            </p>
            <form>
              <input type="email" placeholder="Your Email Here" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footerBottom">
          <p>
           <span>
              © 2017 Neuron Finance Inc. All Rights Reserved. Beautiful WordPress
              Theme By  
            </span> 
              TrendyTheme
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;