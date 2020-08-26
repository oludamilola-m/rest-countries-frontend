import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className={theme}>
      <h2 className="world">Where in the world?</h2>
      <div onClick={toggleTheme}>
        {theme === "dark" && (
          <React.Fragment>
            <FontAwesomeIcon icon="moon" />
            <span> Dark Mode</span>
          </React.Fragment>
        )}
        {theme === "light" && (
          <React.Fragment>
            <FontAwesomeIcon icon={["far", "moon"]} />
            <span> Light Mode</span>
          </React.Fragment>
        )}
      </div>
    </header>
  );
};

export default Header;
