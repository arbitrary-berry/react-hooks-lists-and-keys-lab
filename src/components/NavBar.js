import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav><a href="#home">home</a><a href ="#about">about</a><a href ="#projects">projects</a>{/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
