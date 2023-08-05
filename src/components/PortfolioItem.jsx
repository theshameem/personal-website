import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio-item">
      <img src={img} alt="portfolio-img" className="portfolio-img" />

      <div className="portfolio-hover" onClick={toggleModal}>
        <h3 className="portfolio-title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio-modal">
          <div className="portfolio-modal-content">
            <img
              src={Close}
              alt=""
              className="modal-close"
              onClick={toggleModal}
            />

            <h3 className="modal-title">{title}</h3>

            <ul className="modal-list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal-item" key={index}>
                    <span className="item-icon">{icon}</span>

                    <div>
                      <span className="item-title">{title}</span>
                      <span className="item-details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
