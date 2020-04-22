import React from "react";

import { Link } from "react-router-dom";


import addToCart from "../icons/add-to-cart.png";


class LimitedEdition extends React.Component {
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
        return (val.collection !== "NUDE kolekce");
    });
    this.setState({ items: data.map(item => (
        <li key={ item.id }className="product-container">
          <Link to={`/woo-limitky/${item.id}`}>
            <div>
                <img className="product-image"src={ item.img1 } alt={ item.title }></img>             
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
            <h3 className="collection-title">WOO <br />
              LIMITKY
            </h3>
            <p className="collection-quote">Dokonalé splynutí dvou přírodních materiálů.</p>
          </div>
          <div className="collection-text">
            <p>
            Italská kůže je zpracována precizně se zaměřením na každý detail  a 
            jedinečná kresba ručně broušeného dřeva dodá kabelce tvář a zaručuje 
            neopakovatelnost a originalitu každého kusu. Navíc Vám díky kvalitě 
            našich materiálů a poctivé práci kabelka vydrží roky.
            </p>
          </div>
        </div>
      </div>
      <ul className="container all-products">
            { this.state.items }
      </ul>
    </div>;
    }
  }

export default LimitedEdition; 