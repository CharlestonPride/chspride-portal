import React, { Component } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Container,
  Table,
  CardFooter,
  Alert,
  Spinner
} from "reactstrap";
import BoardHeader from "components/Headers/BoardHeader";
import { ButtonLink } from "components/Utils/LinkUtils";

export class ListBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [], loading: true, error: false };
  }

  componentDidMount() {
    this.populateBoardData();
  }

  static renderBoardTable(board) {
    return (
      <Table className="align-items-center table-flush" responsive hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Executive</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {board.map(boardMember => (
            <tr key={boardMember.id}>
              <td>{boardMember.firstName}</td>
              <td>{boardMember.lastName}</td>
              <td>{boardMember.title}</td>
              <td>{ListBoard.renderPill(boardMember)}</td>
              <td>
                <ButtonLink
                  color="primary"
                  to={"/board/edit/" + boardMember.id}
                  size="sm"
                >
                  Edit
                </ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  static renderPill(boardMember) {
    return boardMember.executive ? (
      <Badge color="warning" pill>
        Executive
      </Badge>
    ) : (
      <Badge color="info" pill>
        Board Member
      </Badge>
    );
  }

  newBoardMember() {}

  render() {
    let contents = this.state.loading ? (
      <Container>
        <Spinner type="grow" color="success" />
      </Container>
    ) : (
      ListBoard.renderBoardTable(this.state.board)
    );

    return (
      <>
        <BoardHeader />
        <Container className="mt--7" fluid>
          {this.state.error && (
            <Alert color="danger">An error occurred obtain</Alert>
          )}
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Board of Directors</h3>
            </CardHeader>
            {contents}
            <CardFooter>
              <ButtonLink color="success" to={"/board/edit/new"}>
                New board member
              </ButtonLink>
            </CardFooter>
          </Card>
        </Container>
      </>
    );
  }

  async populateBoardData() {
    fetch("/api/directors")
      .then(response => response.json())
      .then(data => {
        this.setState({ board: data, loading: false });
      })
      .catch(error => {
        console.error("Error", error);
        this.setState({
          error: true,
          loading: false
        });
      });
  }
}

export default ListBoard;
