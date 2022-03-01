import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/.techfarm.jpg";

export default function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fuild ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Chandan Emmi</strong>
                  </h1>
                  <h2 className="my-3">
                    we are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="Home img"
                    className="img-fluid animated"
                    style={{ height: "75vh", width: "80vw" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
