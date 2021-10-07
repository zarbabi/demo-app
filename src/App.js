import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import Layout from "./Layout/Layout";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Layout>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/profile" component={Profile} />
    </Layout>
  );
}

export default App;
