import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About-us Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
    </BrowserRouter>
  );
}

export default App;
