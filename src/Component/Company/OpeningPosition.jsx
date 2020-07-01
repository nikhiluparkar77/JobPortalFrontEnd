import React, { Component } from "react";

class OpeningPosition extends Component {
  render() {
    const { Result } = this.props;
    return (
      <div className="row">
        {Result.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div style={{ padding: "20px 12px" }}>{item.position}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default OpeningPosition;
