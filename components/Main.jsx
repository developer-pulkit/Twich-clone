import React from "react";
import Hero from "./Hero";
import LiveChannels from "./LiveChannels";
import IconBar from "./IconBar";
import Categories from "./Categories";

function Main() {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
}

export default Main;
