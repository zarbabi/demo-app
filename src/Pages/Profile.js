import { Route } from "react-router";
import DashBoard from "../components/dashboard";
import Downloads from "../components/downloads";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <>
      <p>Welcome back ! </p>
      <SideBar />
      <Route path="/profile/dashboard" component={DashBoard} />
      <Route path="/profile/downloads" component={Downloads} />
    </>
  );
};

export default Profile;
