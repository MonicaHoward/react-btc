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

            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto" />
              <span class="navbar-text text-white">Sign-in</span>
              <i class="fas fa-arrow-right text-white mx-2" />
            </div>
          </nav>
        </div>
        <div class="container hero-header">
          <div class="row">
            <div class="card col-md-5 mr-5 border-0 bg-transparent">
              <div class="card-body">
                <div
                  class="alert alert-success rounded-pill rectangle-4"
                  role="alert"
                >
                  <span class="rectangle-5 mx-0 px-2 text-white">NEW</span>
                  <span class="alert-text text-dark mx-2">
                    A simple success alert—check it out!
                  </span>
                </div>
                {/* <div
                  class="alert alert-light rounded-pill rectangle-4"
                  role="alert"
                >
                  <span class="rounded-pill-sm rectangle-5">NEW </span>
                  <span class="alert-text text-white">
                    Catch mouse and gave it as a present chew the giant but
                    scratch
                  </span>
                </div> */}
                <h1 class="title mt-5">Buy Bitcoin with Credit Card</h1>
                <p class="blurb">
                  Catch mouse and gave it as a present chew the plant but
                  scratch me there, elevator butt. Always ensure to lay down in
                  such a manner that tail can lightly brush.
                </p>
                <button type="button" class="btn btn-light shadow cta">
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
            {/* RIGHT SIDE CARD */}
            <div class="card col-md-5 border-0 mx-auto buy-btc">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="formControlRange">Example Range input</label>
                    <input
                      type="range"
                      class="form-control-range slider"
                      id="formControlRange"
                    />
                    <div class="row amount-range">
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                      <div class="col">|</div>
                    </div>
                    <div class="row amount-range">
                      <div class="col">0.01</div>
                      <div class="col">0.15</div>
                      <div class="col">0.25</div>
                      <div class="col">0.35</div>
                      <div class="col">0.45</div>
                      <div class="col">0.45</div>
                      <div class="col">0.60</div>
                      <div class="col">0.80</div>
                      <div class="col">0.93</div>
                    </div>
                  </div>
                </form>
                <div class="card shadow border-0 mt-4">
                  <div class="card-body">
                    <span>
                      <strong>$200</strong>
                    </span>
                    <div class="btn-group float-right" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-flag-usa" /> USA
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
                <p class="pt-4">
                  For <strong>200 USD </strong>you will get{" "}
                  <strong>0.75454 Bitcoin</strong>
                </p>
                <div class="card border-0 shadow">
                  <div class="card-body">
                    <span>
                      <strong>0.75454</strong>
                    </span>
                    <div class="btn-group float-right" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fab fa-bitcoin" /> BTC
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
                <div class="pt-3">
                  <button
                    type="button"
                    class="btn btn-success btn-lg btn-block"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
