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
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Header from "components/Headers/Header.jsx";
import {
  TextInput,
  SelectInput,
  CheckboxInput
} from "components/Forms/FormInputs";

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
                  <Formik
                    initialValues={{
                      name: "",
                      sponsorshipLevel: ""
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().required("Required"),
                      sponsorshipLevel: Yup.string()
                        // specify the set of valid values for job type
                        // @see http://bit.ly/yup-mixed-oneOf
                        .oneOf(
                          [
                            "presenting",
                            "promoting",
                            "supporting",
                            "partnering",
                            "wristband",
                            "lounge",
                            "tshirt",
                            "bag"
                          ],
                          "Invalid Sponsorship Level"
                        )
                        .required("Required")
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      fetch("/api/directors", {
                        method: "POST", // or 'PUT'
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(values)
                      })
                        .then(response => response.json())
                        .then(data => {
                          console.log("Success:", data);
                        })
                        .catch(error => {
                          console.error("Error:", error);
                        })
                        .then(() => {
                          setSubmitting(false);
                        });
                    }}
                  >
                    <Form id="myform">
                      <TextInput
                        label="Sponsor Name"
                        name="name"
                        type="text"
                        placeholder="Some Company"
                      />
                      <SelectInput
                        label="Sponsorship Level"
                        name="sponsorshipLevel"
                      >
                        <option value="">Select a sponsorship level</option>
                        <option value="presenting">Presenting</option>
                        <option value="promoting">Promoting</option>
                        <option value="supporting">Supporting</option>
                        <option value="lounge">VIP Lounge</option>
                        <option value="wristband">Wristband</option>
                        <option value="tshirt">Volunteer Shirt </option>
                        <option value="bag">Commemorative Bag </option>
                        <option value="partnering">Partnering</option>
                      </SelectInput>
                      <CheckboxInput name="acceptedTerms">
                        I accept the terms and conditions
                      </CheckboxInput>
                    </Form>
                  </Formik>
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
