import React, { Component } from "react";
import * as s from "./card.module.scss";
import Tag from "../../assets/svgs/price-tag.svg";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaylabel: false,
    };
  }
  render() {
    const { dat } = this.props;
    const { displaylabel } = this.state;
    console.log(displaylabel);
    return (
      <div className={s.container}>
        <div className={s.image}>
          <div className={s.mainImage}>
            {dat.label && (
              <img
                src={Tag}
                alt={dat.label}
                className={s.image}
                onMouseEnter={() => {
                  this.setState({ displaylabel: true });
                }}
                onMouseLeave={() => {
                  this.setState({ displaylabel: false });
                }}
              />
            )}
            {dat.label.length > 0 && (
              <>{displaylabel && <div className={s.label}>{dat.label}</div>}</>
            )}
            <img src={dat.image} alt={dat.name} className={s.mimage} />
          </div>
        </div>
        <div className={s.details}>
          <div className={s.headingSubHeading}>
            <div className={s.name}>{dat.name}</div>
            <div className={s.subHeading}>{dat.description}</div>
          </div>
          <div className={s.priceTag}>
            <div className={s.category}>{dat.category}</div>
            <div className={s.price}>Price:{dat.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
