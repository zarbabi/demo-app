import { withRouter, NavLink } from "react-router-dom";
const items = [
  { name: "Home", to: "/", exact: "true" },
  { name: "About-us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
];
const Navigation = ({ locations }) => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
