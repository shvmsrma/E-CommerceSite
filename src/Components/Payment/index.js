import React, { Component } from "react";
import * as s from "./payment.module.scss";

class Paymnet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className={s.container}>
        <div></div>
      </div>
    );
  }
}

export default Paymnet;
