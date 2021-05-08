import react from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav>
        <div
          className="nav-wrapper #d4e157 lime lighten-1
"
        >
          <Link to="/" className="brand-logo left">
            Welcome
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/jokes">Jokes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Home;
