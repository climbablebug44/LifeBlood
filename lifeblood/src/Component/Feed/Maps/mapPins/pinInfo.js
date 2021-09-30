import React, { PureComponent } from "react";
import './pinInfo.css'
import './drop.png'

export default class PinInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.name}`;
    const bloodGroup = `${info.bloodG}`

    return (
        <div className="pin-div-popup">
          <div className="head">
            <img src={ require('./drop.png') }/>
            <h2>{bloodGroup}</h2>
          </div>
          <div className="body">
            {displayName}
          </div>
        </div>
    );
  }
}