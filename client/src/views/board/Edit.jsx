import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  CardFooter
} from "reactstrap";
import BoardHeader from "components/Headers/BoardHeader";
import { ButtonLink } from "components/Utils/LinkUtils";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextInput,
  CheckboxInput,
  DateInput
} from "../../components/Forms/FormInputs";

class EditBoardMember extends Component {
  constructor(props) {
    super(props);
    this.state = { member: undefined, loading: true, error: false };
  }

  componentDidMount() {
    fetch("/api/directors/" + this.props.match.params.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          member: data
        });
      })
      .catch(error => {
        console.error("Error", error);
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  isNew() {
    return this.props.match.params.id === "new";
  }

  onSubmit(data) {
    alert(JSON.stringify(data));
  }

  render() {
    return (
      <>
        <BoardHeader />
        <Container className="mt--7" fluid>
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">{this.isNew() ? "New" : "Edit"} </h3>
            </CardHeader>
            <CardBody>
              {this.state.member ? (
                <Formik
                  enableReinitialize="true"
                  initialValues={this.state.member}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required("Required"),
                    lastName: Yup.string().required("Required"),
                    title: Yup.string().required("Required"),
                    dateElected: Yup.date().required("Required"),
                    dateElectedToBoard: Yup.date().required("Required"),
                    pronouns: Yup.object().shape({
                      subjective: Yup.string().required("Required"),
                      objective: Yup.string().required("Required"),
                      possessive: Yup.string().required("Required")
                    })
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
                  <Form>
                    <TextInput
                      label="First Name"
                      name="firstName"
                      type="text"
                    />
                    <TextInput label="Last Name" name="lastName" type="text" />
                    <TextInput label="Title" name="title" type="text" />
                    <CheckboxInput label="Executive?" name="executive">
                      Is Executive?
                    </CheckboxInput>
                    <DateInput label="Date Elected" name="dateElected" />
                    <DateInput
                      label="Date Elected to Board"
                      name="dateElectedToBoard"
                    />
                    <TextInput label="Subjective" name="pronouns.subjective" />
                    <TextInput label="Objective" name="pronouns.objective" />
                    <TextInput label="Possessive" name="pronouns.possessive" />
                  </Form>
                </Formik>
              ) : null}
            </CardBody>
            <CardFooter>
              <Button color="primary" type="button">
                Save
              </Button>
              <ButtonLink color="secondary" type="button" to="/board">
                Cancel
              </ButtonLink>
            </CardFooter>
          </Card>
        </Container>
      </>
    );
  }
}

export default EditBoardMember;
