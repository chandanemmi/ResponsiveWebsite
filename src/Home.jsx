import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/.techfarm.jpg";
import Common from "./Common";

export default function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}
