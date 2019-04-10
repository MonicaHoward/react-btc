import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="rectangle-45">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-transparent">
            <a class="navbar-brand text-white" href="#">
              Changelly
            </a>
            <a class="float-right text-white" href="#">
              Sign in
            </a>
            <i class="fas fa-arrow-right text-white" />
          </nav>
        </div>
        <div class="container">
          <div class="row">
            <div class="card col-md-6">
              <div class="card-body">
                <div class="alert alert-success rounded-pill" role="alert">
                  <span class="rounded-pill-sm">NEW </span>Catch mouse and gave
                  it as a present chew the giant but scratch
                </div>
                <h1>Buy Bitcoin with Credit Card</h1>
                <p>
                  Catch mouse and gave it as a present chew the plant but
                  scratch me there, elevator butt. Always ensure to lay down in
                  such a manner that tail can lightly brush.
                </p>
                <button type="button" class="btn btn-light">
                  Create Account
                </button>
              </div>
            </div>
            {/* RIGHT SIDE CARD */}
            <div class="card col-md-6">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="formControlRange">Example Range input</label>
                    <input
                      type="range"
                      class="form-control-range"
                      id="formControlRange"
                    />
                  </div>
                </form>
                <div class="card">
                  <div class="card-body">
                    <span>#number</span>
                    <div class="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        class="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <a class="dropdown-item" href="#">
                          Dropdown link
                        </a>
                        <a class="dropdown-item" href="#">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p>For 200 USD you will get 0.75454 Bitcoin</p>
                <div class="card">
                  <div class="card-body">
                    <span>#number</span>
                    <div class="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        class="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <a class="dropdown-item" href="#">
                          Dropdown link
                        </a>
                        <a class="dropdown-item" href="#">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-success btn-lg btn-block">
                  Block level button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
