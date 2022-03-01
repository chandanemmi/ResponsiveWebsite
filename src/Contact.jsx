import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.My mobile number is ${data.phone}.My email id is ${data.email} & This is my Message ${data.message}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="Full Name"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  phone{" "}
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name=" Email address"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlInput1"
                    rows="3"
                    name=" message"
                    value={data.message}
                    onChange={InputEvent}
                  />
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
