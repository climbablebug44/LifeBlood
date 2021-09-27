import React, { PureComponent } from "react";

export default class PinInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.name}`;
    const bloodGroup = `${info.bloodG}`

    return (
        <div>
          {displayName}{" : "}{bloodGroup}
        </div>
    );
  }
}