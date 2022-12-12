import React from "react";
import "./ModifyHeader.scss";
const ModifyHeader = ({ text }) => {
  return (
    <div className="modifyHeaderSection">
      <div className="modifyHeader" value={text}>
        {text}
      </div>
    </div>
  );
};

export default ModifyHeader;
