import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Monique Ahlheim</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Welcome</h2>
          <p>
            Welcome to my portfolio page powered by React! Please enjoy a small selection of the work I have accomplished!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;