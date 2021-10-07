import AboutUs from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUs },
];
export default routes;
