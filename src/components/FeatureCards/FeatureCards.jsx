import React from "react";
import "./FeatureCards.css";
import featureImg from "../../assets/images/featureCard1.webp";

function FeatureCards() {
  return (
    <>
      <section className="featureSection">
        <div className="featureContainer">
          <div className="featureHeadingText">
            <h2>Welcome to the Neuron Finance</h2>
            <p>
              Holistically transform excellent systems rather than collaborative
              leadership. Credibly pursue compelling outside the box.
            </p>
          </div>
          <div className="featureCardContainer">
            {["About Business", "Business Growth", "Sustainability"].map(
              (title, index) => (
                <div className="featureCardContents" key={index}>
                  <img
                    src={featureImg}
                    alt={`${title} Image`}
                    className="featureCardImg"
                  />
                  <div className="featureCardText">
                    <h3>{title}</h3>
                    <p>
                      Seamlessly envision e-commerce initiatives via end-to-end
                      web-compatible applications. Proactively promote timely
                      best practices.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureCards;
