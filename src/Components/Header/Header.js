import React from "react";

import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";

import "./Header.css";
function Header() {
  return (
    <header class="header">
      <Topbar />
      <Navbar />
    </header>
  );
}

export default Header;
