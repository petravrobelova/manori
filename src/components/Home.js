import React from "react";

import background from "../images/background.jpg";
import nudeCollectionImage from "../images/nude-collection.jpg";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
      return <div className="main-page">
          <div>
              <img className="background-image" alt="Background" src={background}></img>
          </div>
          <div className="container">
          <div className="home-collection">
            <div>
              <img className="home-collection-image" src={nudeCollectionImage} alt="Nude kolekce"></img>
            </div>
            <div className="home-text-container">
              <h3 className="home-title">NUDE <br/>
              KOLEKCE</h3>
              <p className="home-quote">
              Minimalismus, krása <br />
              a nadčasovost.
              </p>
              <p className="home-text">
              Kabelky jsou vyrobené z nejkvalitnější italské kůže, 
              kterou důmyslně skládáme, a tak dosahujeme čisté linie. 
              Vše od prvního návrhu až po konečný výsledek probíhá 
              nedaleko Olomouce. Díky kvalitní české ruční práci Vám 
              kabelka vydrží roky a náš nadčasový design nikdy nevyjde
              z módy.
              </p>
              <Link to="/nude-kolekce">
                <button className="home-button">Naše produkty</button>
              </Link>
            </div>
          </div>
          <div className="home-collection home-reverse">
            <div>
              <img className="home-collection-image" src={nudeCollectionImage} alt="Nude kolekce"></img>
            </div>
            <div className="home-text-container">
              <h3 className="home-title">WOO <br />
              LIMITKY
              </h3>
              <p className="home-quote">
              Dokonalé splynutí dvou <br />
              přírodních materiálů.
              </p>
              <p className="home-text">
              Italská kůže je zpracována precizně se zaměřením na každý
              detail  a jedinečná kresba ručně broušeného dřeva dodá 
              kabelce tvář a zaručuje neopakovatelnost a originalitu
              každého kusu. Díky kvalitě našich materiálů a poctivé 
              práci vydrží Vaše kabelka celé roky.
              </p>
              <Link to="/woo-limitky">
                <button className="home-button home-button-reverse">Naše produkty</button>
              </Link>
            </div>
          </div>
          </div>
      </div>;
    }
  }

export default Home; 