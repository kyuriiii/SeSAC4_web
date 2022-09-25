import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class PracticeRef extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      </div>
    );
  }
}

export default PracticeRef;