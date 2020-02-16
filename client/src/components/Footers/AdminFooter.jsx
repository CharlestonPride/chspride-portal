import React from "react";
import { Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col>
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://www.charlestonpride.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                Charleston Pride
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
