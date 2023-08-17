import React from "react";
import cssPortfolioImage from "../../assets/images/cssPortfolioImage.png";
import weatherDashboardImage from "../../assets/images/weatherDashboardImage.png";
import fureverHomeImage from "../../assets/images/fureverHomeImage.png";
import noteTakerImage from "../../assets/images/noteTakerImage.png";
import boredomKillerImage from "../../assets/images/boredomKillerImage.png";
import schedulerImage from "../../assets/images/schedulerImage.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahlheim.github.io/laughing-umbrella/">
                {" "}
                <img
                  src={schedulerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Day-Scheduler"
                />
              </a>
            </div>
            <div className="job-text">
            <a href="https://github.com/mahlheim/laughing-umbrella">
              <h4>Work Day Scheduler</h4> </a>
              <p>
              This website is a daily schedule. The user can input appointments, meetings, etc. to the schedule on an hourly basis. 
              This website offers a virtual way to plan out a typical 9-5 workday.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahlheim.github.io/fuzzy-octo-succotash/">
                {" "}
                <img
                  src={boredomKillerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Boredom-Killer"
                />
              </a>
            </div>
            <div className="job-text">
            <a href="https://github.com/mahlheim/fuzzy-octo-succotash">
              <h4>Boredom Killer!</h4> </a>
              <p>
              Nobody likes to be bored! Boredom Killer offers a quick solution for your apathy! 
              Find a random song and listen while reading a fun fact! When you get bored, 
              just press the 'Go' button and generate a new song and fact!{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://module-11-expressjs-challenge-288f150d826c.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note-Taker"
                />
              </a>
            </div>
            <div className="job-text">
            <a href="https://github.com/mahlheim/friendly-barnacle">
              <h4>Note Taker</h4> </a>
              <p>
              This app can be used to write and save notes. Through the use of an express.js back end, 
              this app will save and retrieve note data from a JSON file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://fathomless-shore-00999-99874d90faa8.herokuapp.com/">
                {" "}
                <img
                  src={fureverHomeImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Furever-Home"
                />
              </a>
            </div>
            <div className="job-text">
            <a href="https://github.com/mahlheim/curly-broccoli">
              <h4>Furever Home Pet Adoption</h4> </a>
              <p>
              Furever Home is an interactive website that allows a user to browse available cats and dogs for adoption at 
              three different Furever Home locations. This application was made possible through the use of Node.js, Express.js, 
              Handlebars.js, Google Fonts, MySQL, and the Sequelize ORM. It was created using the MVC paradigm and includes 
              authentication via express-session.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahlheim.github.io/fantastic-rotary-phone/">
                {" "}
                <img
                  src={weatherDashboardImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
            <a href="https://github.com/mahlheim/fantastic-rotary-phone">
              <h4>Weather Dashboard</h4> </a>
              <p>
              This app is a Weather Dashboard that runs in the browser and features a dynamically updated HTML and CSS. 
              The app uses the 5 Day Weather Forecast to retrieve data for cities and returns a 5-Day
              Forecast. The user can see the temperature, humidity levels, wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahlheim.github.io/turbo-telegram/">
                {" "}
                <img
                  src={cssPortfolioImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="CSS-Portfolio"
                />
              </a>
            </div>
            <div className="job-text">
            <a href="https://github.com/mahlheim/turbo-telegram">
              <h4>CSS Portfolio</h4> </a>
              <p>
              As a student in the Full Stack Developer program at UNC Charlotte, I will make many projects that I would like to be 
              able to showcase to potential clients and employers. This portfolio website is intended to be a place I can compile 
              my work and share it with others. This portfolio is powered by HTML and CSS.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;