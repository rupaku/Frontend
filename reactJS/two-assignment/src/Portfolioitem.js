import React from "react";

const Portfolioitem = ({ divId, label, header, imgId, para, buttonId }) => (
  <div
    className="portfolio-modal modal fade"
    id={divId}
    tabIndex="-1"
    role="dialog"
    aria-labelledby={label}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button
          className="close"
          type="button"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {header}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img className="img-fluid rounded mb-5" src={imgId} alt="" />
                <p className="mb-5">{para}</p>
                <button
                  className="btn btn-primary"
                  href="#"
                  data-dismiss="modal"
                >
                  <i className="fas fa-times fa-fw"></i>
                  {buttonId}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolioitem;
