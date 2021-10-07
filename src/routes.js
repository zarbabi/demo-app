import Blog from "./components/Blog";
import AboutUs from "./Pages/AboutUsPage";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import PostPage from "./Pages/PostPage";
const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUs },
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/post/:id?([0-9]+)", component: PostPage },
  { component: NotFound },
];
export default routes;
