import React from "react";
import './Footer.css';
import visa1 from '../../assets/images/visa1.png';
import visa2 from '../../assets/images/visa2.png';
import visa3 from '../../assets/images/visa3.png';
import visa4 from '../../assets/images/visa4.png';

function Footer() {
  return(
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Neuron Finance</h3>
            <p>
              Collaboratively create resource-sucking manufactured products and worldwide services. Seamlessly mesh B2C functionalities rather than intermandated metrics. Energistically innovate open-source systems for performance-based tools.
            </p>
            <div className="payment-icon">
              <img src={visa1} alt="Payment Icon 1" />
              <img src={visa2} alt="Payment Icon 2" />
              <img src={visa3} alt="Payment Icon 3" />
              <img src={visa4} alt="Payment Icon 4" />
            </div>
          </div>
          <div className="footer-column">
            <h3>Useful Link</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Latest Post</h3>
            <ul>
              <li>
              <a href="#">Headset No Longer Wire For Sound</a>
              <span>May 2018</span>
              </li>
              <li>
              <a href="#">Comment On The Impact of Human Life</a>
              <span>May 2018</span>
              </li>
              <li>
              <a href="#">Best Collabro Offer A Visa Employee</a>
              <span>May 2018</span>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsletter Subscription</h3>
            <p>
            Subscribe to get the latest news, updates, and other information. Don’t worry, we won’t send spam!
            </p>
            <form>
              <input type="email" placeholder="Your Email Here" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="foooter-bottom">
            <p>
            © 2017 Neuron Finance Inc. All Rights Reserved. Beautiful WordPress Theme By TrendyTheme
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
