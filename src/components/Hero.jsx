import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="py-md-5">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="mb-4 mb-xl-0 text-center text-md-start">
                  <h1 class="display-4 fw-bold mb-3 ls-sm ">
                    Design a better Website template
                  </h1>
                  <p class="mb-4 lead">
                    Building your brand's Website and get detailed insights on
                    how templates are Created
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=JRzWRZahOVU"
                    class="btn btn-success btn-lg display-5 px-4 mt-5 rounded-5"
                  >
                    {this.props.Button3}
                  </a>
                </div>
              </div>
              <div class="offset-xl-1 col-xl-5 col-lg-6 col-md-12">
                <div class="d-block mt-n5 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=JRzWRZahOVU"
                    class="text-dark mt-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="display-3 border rounded-circle shadow-sm mt-5 iconify iconify--gg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m15 12.33l-6 4.33V8l6 4.33Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
