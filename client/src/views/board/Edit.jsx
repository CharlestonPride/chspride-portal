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
            <CardBody></CardBody>
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
