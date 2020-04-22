import React from "react";
import addToCart from "../icons/add-to-cart.png";

import { Link } from "react-router-dom";

class NudeCollection extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      loading: true,
      items: null
  }
}

async componentDidMount() {
    const url = "http://localhost:3001/products";
    const response = await fetch(url);
    let data = await response.json();
    data = data.filter(function(val) {
        return (val.collection !== "WOO limitky");
    });
    this.setState({ items: data.map(item => (
        <li key={ item.id } className="product-container">
          <Link to={`nude-kolekce/${item.id}`}>
            <div>
                <img className="product-image"src= { item.img1 } alt= { item.title }></img>
            </div>
            <div className="product-description-container">
                <div className="product-description">
                    <h6 className="product-title">{ item.title }</h6>
                    <p className="product-price">{ item.price }</p>
                </div>
                <div>
                    <img className="add-to-cart-icon" src={addToCart} alt="Add to cart"></img>
                </div>
            </div>
            </Link>
        </li>
    )), loading: false });
}



    render() {
      return <div className="collection">
        <div className="collection-description">
          <div className="collection-description-container">
            <div className="collection-title-section">
              <h3 className="collection-title">NUDE <br />
                KOLEKCE
              </h3>
              <p className="collection-quote">Minimalismus, krása a nadčasovost.</p>
            </div>
            <div className="collection-text">
              <p>
              Kabelky jsou vyrobené z nejkvalitnější italské kůže, kterou 
              důmyslně skládáme, a tak dosahujeme čisté linie. Vše od prvního 
              návrhu až po konečný výsledek probíhá nedaleko Olomouce. Díky 
              kvalitní české ruční práci Vám kabelka vydrží roky a náš nadčasový 
              design nikdy nevyjde z módy.
              </p>
            </div>
          </div>
        </div>
        <div className="container all-products">
            { this.state.items }
        </div>
      </div>;
    }
  }

export default NudeCollection; 