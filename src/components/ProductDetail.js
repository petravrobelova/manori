import React from "react";

class ProductDetail extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
          product: null,
          loading: false,
          cartQty: 0
      }
      this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const url = "http://localhost:3001/products";
        const response = await fetch(url);
        let data = await response.json();
        //console.log(data.find(item => item.id == this.props.match.params.id));
        this.setState({product: data.find(item => item.id == this.props.match.params.id), loading: true});
        console.log(this.state.loading);   
    }

   handleClick () {
        this.setState((state) => ({
            cartQty: state.cartQty + 1
        }));
        console.log(this.state.cartQty);
    }

    render() {
        if (this.state.loading === true) {
            const product = this.state.product;
            return (
                <div className="product-detail container">
                    <div>
                        <img className="product-detail-image" alt={ product.title } src={ product.img1 }></img>
                    </div>
                    <div className="product-detail-text">
                        <h2 className="product-detail-title">{ product.title }</h2>
                        <p className="product-detail-description">{ product.description1 }</p>
                        <p className="product-detail-description">{ product.description2 }</p>
                        <p className="product-detail-size"><span id="product-detail-size-text">Rozměry: </span>{ product.size }</p>
                        <p className="product-detail-price">{ product.price }</p>
                        <button className="product-detail-button" onClick={this.handleClick}>Do košíku</button>
                    </div>
                </div>
                
            );
        }
        return <div></div>
    }
}

export default ProductDetail;