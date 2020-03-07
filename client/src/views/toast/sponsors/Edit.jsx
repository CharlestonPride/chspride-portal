import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

import Header from "components/Headers/Header.jsx";
import Form from "./Form";

class EditToastSponsor extends Component {
  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Form />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EditToastSponsor;
