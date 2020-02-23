import React from "react";

const NavBar = ({ handler }) => (
  <div id="capybara-extension--navbar--wrapper">
    <div className="capybara-extension--navbar--container">
      <div className="capybara-extension--navbar--logo">
        <a href="https://capybara-toolkit.appspot.com/">capybara.io</a>
      </div>
    </div>
    <div id="capybara-extension--navbar">
      <div className="capybara-extension--navbar--container">
        <div className="capybara-extension--navbar--link">
          <p>Listing Analysis</p>
        </div>
        <div
          className="exit capybara-extension--navbar--link"
          onClick={handler}
        >
          <img
            src="chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/times-solid.png"
            height="25px"
            alt="Capybara Extension - Close"
          ></img>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
