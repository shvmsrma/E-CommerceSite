import React, { Component } from "react";

import * as s from "./home.module.scss";
import * as axios from "axios";
import * as _ from "lodash";
import Card from "../Card/index";
import Payment from "../Payment/index";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displaypayment: false,
      cardData: [],
    };
  }

  componentDidMount() {
    axios.get("http://starlord.hackerearth.com/recipe").then((res) => {
      this.setState({ data: res.data });
    });
  }

  Cards(data) {
    console.log(data);
    return (
      <div className={s.cardsContainer}>
        {data.map((d) => (
          <div
            onClick={() => {
              console.log("HI");
              this.setState({ displaypayment: true, cardData: d });
            }}
          >
            <Card dat={d} />
          </div>
        ))}
      </div>
    );
  }

  render() {
    let { data, displaypayment } = this.state;

    data = _.chunk(data, 4);

    console.log(data);
    console.log(displaypayment);
    console.log(this.state.cardData);
    return (
      <div className={s.container}>
        {data.map((d) => this.Cards(d))}
        {displaypayment && <Payment data={this.state.cardData} />}
      </div>
    );
  }
}

export default Home;
