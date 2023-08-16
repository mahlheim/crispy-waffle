import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const { currentTab, handleTabChange } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);


  return (
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // use ternary to check if currentTab is `About`, and if so use the active link class from bootstrap. otherwise, set it to normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
            // use ternary to check if currentTab is `Portfolio`, and if so use the active link class from bootstrap. otherwise, set it to normal nav-link            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // use ternary to check if currentTab is `Contact`, and if so use the active link class from bootstrap. otherwise, set it to normal nav-link            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // use ternary to check if currentTab is `Resume`, and if so use the active link class from bootstrap. otherwise, set it to normal nav-link            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
    </ul>
    </nav>
  );
}

export default Nav;