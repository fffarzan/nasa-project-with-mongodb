import { Link } from "react-router-dom";

import Clickable from "../Clickable";
import Centered from "../Centered";

import './Header.css';

export default props => {
  const { onNav, ...rest } = props;
  
  return ( 
    <header>
      <Centered {...rest} className="header-inner">
        <img 
          src="/favicon.png" 
          alt="favicon"
        />
        <p>NASA Mission Control</p>
        <nav>
          <Clickable 
            onClick={onNav} 
            className="header-nav-link-warpper"  
          >
            <Link to="/launch">
              Launch
            </Link>
          </Clickable>

          <Clickable 
            onClick={onNav} 
            className="header-nav-link-warpper"
          >
            <Link to="/upcoming">
              Upcoming
            </Link>
          </Clickable>
          
          <Clickable 
            onClick={onNav} 
            className="header-nav-link-warpper"
          >
            <Link to="/history">
              History
            </Link>
          </Clickable>
        </nav>
      </Centered>
    </header>
  );
};
