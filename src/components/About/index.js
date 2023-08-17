import React from "react";
import Monique from "../../assets/images/monique.jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <p>
           Hello! I'm Monique Ahlheim. I'm a University of North Carolina at Greensboro alum with a bachelors degree in Media Studies. I've recently completed the FullStack Developer course at University of North Carolina at Charlotte! Thanks for checking out my work! This is my portfolio page powered by React! Please enjoy a small selection of the work I have accomplished!
          </p>
          <div class="intro-img">
            <img src={Monique} style={{ width: "80%" }} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;