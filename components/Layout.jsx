import React from "react";
import Main from "./Main";
import SideMenu from "./SideMenu";

function Layout() {
  return (
    <div className="pt-[60px] flex w-full">
      <SideMenu />
      <Main />
    </div>
  );
}

export default Layout;
