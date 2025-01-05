import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <h2>About Us</h2>
      <p>
      Welcome to Falcon Integrated Agro Farms

At Falcon Integrated Agro Farms, we are committed to revolutionizing agriculture through innovation and sustainability. Our mission is to provide high-quality, eco-friendly agricultural products while promoting practices that nurture the environment.

We specialize in diverse agricultural ventures, including crop production, poultry farming, and sustainable practices that ensure the well-being of our community and the planet.

With a passion for excellence and a focus on environmental stewardship, we strive to create a greener, healthier future for generations to come.
      </p>
      <div className="team">
        <div className="team-member">
          <img src="team-member.jpg" alt="Nnamdi I. Ezechukwu" />
          <h3>Nnamdi I. Ezechukwu</h3>
          <p>Farm Manager</p>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Agronomist</p>
        </div>
        <div className="team-member">
          <img src="team-member3.jpg" alt="Michael Brown" />
          <h3>Michael Brown</h3>
          <p>Logistics Coordinator</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
