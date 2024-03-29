import React from "react";
import SideBar from "./SideBar";
import Songs from "./Songs";
import CurrentSongScreen from "./CurrentSongScreen";
import { useSelector } from "react-redux";
import './main.css'

const Main = () => {
  const { gradientColors,selectedSong } = useSelector((state) => state);

  
  return (
    <div
      className="app"
      style={{
        background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
      }}
    >
      <div id="div-1" className="display_none">
        <SideBar />
      </div>
      <div id="div-2">
        <Songs />
      </div>
      <div className={`list ${selectedSong?"":"display_none"}`} id="div-3">
        <CurrentSongScreen />
      </div>
    </div>
  );
};

export default Main;
