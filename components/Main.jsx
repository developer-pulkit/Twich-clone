import React from "react";
import Hero from "./Hero";
import LiveChannels from "./LiveChannels";

function Main() {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannels />
    </div>
  );
}

export default Main;
