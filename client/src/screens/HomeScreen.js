import React from "react";
import SideBar from "../components/SideBar";
import Overview from "../components/Overview";
import "../styles/HomeScreen.css";
import TipScreen from "./TipScreen";

const HomeScreen = () => {
  return (
    <div className="landing-page">
      <SideBar />
      <Overview />
    </div>
  );
};

export default HomeScreen;
