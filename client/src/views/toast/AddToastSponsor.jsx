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

class AddToastSponsor extends Component {
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
                      firstName: "",
                      lastName: "",
                      email: "",
                      acceptedTerms: false, // added for our checkbox
                      jobType: "" // added for our select
                    }}
                    validationSchema={Yup.object({
                      firstName: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                      lastName: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                      email: Yup.string()
                        .email("Invalid email addresss`")
                        .required("Required"),
                      acceptedTerms: Yup.boolean()
                        .required("Required")
                        .oneOf(
                          [true],
                          "You must accept the terms and conditions."
                        ),
                      jobType: Yup.string()
                        // specify the set of valid values for job type
                        // @see http://bit.ly/yup-mixed-oneOf
                        .oneOf(
                          ["designer", "development", "product", "other"],
                          "Invalid Job Type"
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
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                      />
                      <TextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                      />
                      <TextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                      />
                      <SelectInput label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
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

export default AddToastSponsor;
