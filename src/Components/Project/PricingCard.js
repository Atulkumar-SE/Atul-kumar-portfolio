import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <>
      <div className="price">
        <div className="card_ontainer">
          <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="mrp">$400</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn2">
              Purchase Now
            </Link>
          </div>
          <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="mrp">$600</p>
            <p>- 5 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn2">
              Purchase Now
            </Link>
          </div>
          <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="mrp">$1000</p>
            <p>- 8 Days -</p>
            <p>- 10 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn2">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
