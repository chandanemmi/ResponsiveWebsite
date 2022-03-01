import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/.techfarm.jpg";
import Common from "./Common"
export default function About() {
  return (
    <>
     <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
  );
}
