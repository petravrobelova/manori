import React from "react";

import { Link } from "react-router-dom";

import one from "../icons/numbers/one.png";
import two from "../icons/numbers/two.png";
import three from "../icons/numbers/three.png";
import next from "../icons/next.png";


class ShoppingCart extends React.Component {
    render() {
      return <div className="cart">
        <div className="cart-process">
          <div className="container cart-process-container">
            <div className="step">
              <img alt="First step" className="cart-icon" src={one} />
              <h6 className="cart-process-text">Košík</h6>
              <img alt="Next" className="cart-next" src={next} /> 
            </div>
            <div className="step">
              <img alt="Second step" className="cart-icon" src={two} />
              <h6 className="cart-process-text">Dodací údaje</h6>
              <img alt="Next" className="cart-next" src={next} />
            </div>
            <div className="step">
              <img alt="Third step" className="cart-icon" src={three} />
              <h6 className="cart-process-text">Doprava a platba</h6>
            </div>
          </div>
        </div>
        <div className="cart-content container">
          <div className="cart-content-text-container">
            <p className="cart-content-text">Vaš košík je prázdný.</p>
            <p className="cart-content-text">
              Vyberte si tu pravou kabelku z nadčasové {" "}
              <Link to="/nude-kolekce" className="cart-link">NUDE kolekce</Link>
              {" "}nebo jedinečnou{" "}
              <Link to="/woo-limitky" className="cart-link">WOO limitku</Link>.
            </p>
          </div>
          <div className="cart-empty-offer">

          </div>
        </div>
      </div>;
    }
  }

export default ShoppingCart; 