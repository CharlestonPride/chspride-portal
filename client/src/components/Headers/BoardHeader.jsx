import React from "react";
import { Container, Row, Col } from "reactstrap";

class BoardHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage: "url(" + require("assets/img/board.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <span className="mask bg-gradient-default opacity-8" />
        </div>
      </>
    );
  }
}

export default BoardHeader;
