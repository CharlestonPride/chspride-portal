import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button
} from "reactstrap";
import * as Yup from "yup";

import Header from "components/Headers/Header.jsx";
import {
  TextInput,
  SelectInput,
  CheckboxInput
} from "components/Forms/FormInputs";
import Form from "./Form";

class EditToastSponsor extends Component {
  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card body>
                <CardHeader>Add Sponsor</CardHeader>
                <CardBody>
                  <Form></Form>
                </CardBody>
                <CardFooter>
                  <Button form="myform" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EditToastSponsor;
