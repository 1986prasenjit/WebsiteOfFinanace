import React from 'react';
import "./About.css";
import Diya from '../../assets/images/aboutImg.jpeg'

function About() {
  return (
    <>
        <section className='aboutSection'>
            <div className="aboutContainer">
                <div className="aboutTextContainer">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, suscipit sint eaque facilis ipsam beatae.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis cupiditate libero consectetur tempora esse dignissimos numquam atque neque maiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum soluta laboriosam, quibusdam adipisci minus.</p>
                </div>
                <div className="aboutImgContainer">
                    <img src={Diya} alt="This is our Community Image" />
                </div>
            </div>
        </section>
    </>
  )
}

export default About