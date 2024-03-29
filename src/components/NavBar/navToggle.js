import React, { useState } from "react";
import SideNav from "./sideNav";

function NavControl() {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  const commonAttributes = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
  };

  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={"h-8 w-8"}
        fill="none"
        viewBox="0 0 24 25"
        stroke="#fff"
        onClick={handleClick}
      >
        {opened ? (
          <>
            <path {...commonAttributes} d="M6 18L18 6M6 6l12 12" />
          </>
        ) : (
          <>
            <path {...commonAttributes} d="M4 6h16M4 12h16M4 18h16" />
          </>
        )}
      </svg>
      <div
        className={`transition-opacity duration-500 ${
          opened ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {opened && <SideNav />}
      </div>
    </div>
  );
}

export default NavControl;
