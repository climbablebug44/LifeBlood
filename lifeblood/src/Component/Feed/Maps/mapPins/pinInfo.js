import React, { PureComponent } from "react";
import './pinInfo.css'

export default class PinInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.name}`;
    const bloodGroup = `${info.bloodG}`;
    const personID = `${info.id}`

    return (
        <div className="pin-div-popup">
          <div className="head">
            <h2>{bloodGroup}:   {displayName}</h2>
          </div>
          {personID}
          {"add other details after fetching from server" }
        </div>
    );
  }
}