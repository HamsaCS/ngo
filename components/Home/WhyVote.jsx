import Link from "next/link";
import React from "react";

const WhyVote = () => {
  return (
    <section className="why-trade s1-bg alt-color position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/sun.png"
          alt="vector"
          className="position-absolute push_animat"
        />
        <img
          src="assets/images/star.png"
          alt="vector"
          className="position-absolute  d-xxxl-flex previewSkew"
        />
      </div>
      <div className="container">
        <div className="row gy-3 gy-lg-0 justify-content-center">
          <div className="col-sm-7 col-lg-6 col-xxl-5 order-2 order-lg-0">
            <div className="why-trade__thumbs h-100 d-flex align-items-end ps-20 ps-sm-5 ps-lg-0">
              <img src="assets/images/why_trade.png" alt="Imgae" />
            </div>
          </div>
          <div className="col-lg-6 col-xxl-7">
            <div className="row pt-120 pb-120">
              <div className="col-xxl-6 offset-xxl-2">
                <div className="why-trade__part">
                  <span className="heading fs-five">Why Donate </span>
                  <h3 className="mb-3 mt-5">NGO</h3>
                  <p>
                  Donating to an NGO is vital as it provides the resources needed to carry out programs, support communities, and drive positive change. Each donation helps NGOs fulfill their mission, making a meaningful impact on society.
                  </p>
                  <Link href="/approve-voters">
                    <a className="cmn-btn link secondary-link fs-six-up  gap-2 gap-lg-3 align-items-center mt-5">
                      {" "}
                      Check doners{" "}
                      <i className="ti ti-arrow-narrow-right fs-four"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-12 mt-7 mt-md-8 mt-xxl-3">
                <div className="why-trade__part d-flex align-items-center">
                  <div className="vector d-none d-xxl-flex px-xxl-15">
                    <img
                      src="assets/images/trade_vector.png"
                      alt="Image"
                      className="max-xxl-un"
                    />
                  </div>
                  <div className="content">
                    <h3 className="mb-3">Power of Your Donation</h3>
                    <p>
                    Donations have the power to create real change by funding crucial programs, supporting communities in need, and tackling important issues like education, healthcare, and the environment. Every donation, big or small, contributes to building a better, more compassionate world.
                    </p>
                    <Link href="/approve-candidates">
                      <a className="cmn-btn link secondary-link fs-six-up  gap-2 gap-lg-3 align-items-center mt-5">
                        {" "}
                        Check NGO{" "}
                        <i className="ti ti-arrow-narrow-right fs-four"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVote;
