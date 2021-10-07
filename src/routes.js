import AboutUs from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUs },
  { component: NotFound },
];
export default routes;
