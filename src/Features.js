import React from "react";

class Features extends React.Component {
  render() {
    return (
      <div class="features">
        <div class="row mx-auto">
          <div class="card-group justify-content-center">
            <div class="card">
              <img
                class="card-img-top rounded-circle ml-30 mt-5 feature-icon"
                style={{ height: "48px", width: "48px" }}
                src="https://cdn2.iconfinder.com/data/icons/free-mobile-icon-kit/64/Dollar_coin.png"
                alt="Card image cap"
              />
              <div class="card-body mx-5">
                <h5 class="card-title mx-5 feature-title">REASONABLE FEES</h5>
                <p class="card-text mx-5">
                  Stripe is an always-improving toolchain that gains new
                  features every month. Our world-class engineering team
                  constantly iterates upon every facet of the Stripe stack. And
                  from Apple Pay to Bitcoin, building on Stripe means you get
                  early access to the latest technologies.
                </p>
                <button
                  type="button"
                  class="btn btn-link ml-5 pb-5 more-button"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top rounded-circle ml-30 mt-5 feature-icon"
                style={{ height: "48px", width: "48px" }}
                src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-3/100/Refresh_Reset_Reload_Again_Restart-512.png"
                alt="Card image cap"
              />
              <div class="card-body mx-5">
                <h5 class="card-title mx-5 feature-title">
                  EARLY VERIFICATION
                </h5>
                <p class="card-text mx-5">
                  We help power 100,000+ businesses in 100+ countries and across
                  nearly every industry. Headquartered in San Francisco, Stripe
                  has 9 global offices and hundreds of people working to help
                  transform how modern businesses are built and run.
                </p>
                <button
                  type="button"
                  class="btn btn-link ml-5 pb-5 more-button"
                >
                  Learn More
                </button>
              </div>
            </div>
            {/* <div class="card">
              <img class="card-img-top  " src="x" alt="Card image cap" />
              <div class="card-body mx-5">
                <h5 class="card-title mx-5 feature-title">
                  Early Verification
                </h5>
                <p class="card-text mx-5">
                  We help power 100,000+ businesses in 100+ countries and across
                  nearly every industry. Headquartered in San Francisco, Stripe
                  has 9 global offices and hundreds of people working to help
                  transform how modern businesses are built and run.
                </p>
                <button type="button" class="btn btn-link mx-5 more-button">
                  Learn More
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div class="row mx-auto">
          <div class="card-group justify-content-center">
            <div class="card">
              <img
                class="card-img-top rounded-circle ml-30 mt-5 feature-icon"
                style={{ height: "48px", width: "48px" }}
                src="data:image/png;base64,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"
                alt="Card image cap"
              />
              <div class="card-body mx-5">
                <h5 class="card-title mx-5 feature-title">
                  QUICK TRANSACTIONS
                </h5>
                <p class="card-text mx-5">
                  Stripe is an always-improving toolchain that gains new
                  features every month. Our world-class engineering team
                  constantly iterates upon every facet of the Stripe stack. And
                  from Apple Pay to Bitcoin, building on Stripe means you get
                  early access to the latest technologies.
                </p>
                <button
                  type="button"
                  class="btn btn-link ml-5 pb-5 more-button"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top rounded-circle ml-30 mt-5 feature-icon"
                style={{ height: "48px", width: "48px" }}
                src="data:image/png;base64,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"
                alt="Card image cap"
              />
              <div class="card-body mx-5">
                <h5 class="card-title mx-5 feature-title">INSTANT SUPPORT</h5>
                <p class="card-text mx-5">
                  We help power 100,000+ businesses in 100+ countries and across
                  nearly every industry. Headquartered in San Francisco, Stripe
                  has 9 global offices and hundreds of people working to help
                  transform how modern businesses are built and run.
                </p>
                <button
                  type="button"
                  class="btn btn-link ml-5 pb-5 more-button"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
