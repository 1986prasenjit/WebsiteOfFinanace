import React from "react";
import './FeatureCards.css';
import featureImg from '../../assets/images/featureCard1.webp'

function FeatureCards() {
  return(
    <>
      <section className="featureSection">
            <div className="featureContainer">
              <div className="featureHeadingText">
                <h2>Welcome to thr Neuron Finance</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, similique perspiciatis repudiandae sed dicta qui voluptatem nulla molestiae amet hic.</p>
              </div>
              <div className="featureCardContainer">
                <div className="featureCardContents">
                  <img src={featureImg} alt="Feature Image Here" className="featureCardImg"/>
                  <div className="featureCardText">
                    <h3>Adout Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aliquam dolorem id. Neque incidunt officia et voluptatem quidem nostrum unde?</p>
                  </div>
                </div>
                <div className="featureCardContents">
                  <img src={featureImg} alt="Feature Image Here" className="featureCardImg" />
                  <div className="featureCardText">
                    <h3>Adout Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aliquam dolorem id. Neque incidunt officia et voluptatem quidem nostrum unde?</p>
                  </div>
                </div>
                <div className="featureCardContents">
                  <img src={featureImg} alt="Feature Image Here" className="featureCardImg"/>
                  <div className="featureCardText">
                    <h3>Adout Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aliquam dolorem id. Neque incidunt officia et voluptatem quidem nostrum unde?</p>
                  </div>
                </div>
              </div>
            </div>
      </section>
    </>
  );
}

export default FeatureCards;
