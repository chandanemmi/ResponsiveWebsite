import React from "react";
import Card from "./Card";
import SData from "./SData";
export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {SData.map((val, index) => {
                return (
                  <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
