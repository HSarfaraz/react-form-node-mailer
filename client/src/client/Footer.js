import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Footer.css"; // make sure you import the CSS file

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Card className="shadow">
        <Card.Body>
          <Row className="justify-content-md-center mt-3">
            <Col md={4}>
              {/* Company Logo{" "} */}
              <img src="https://via.placeholder.com/50" className="rounded" />
            </Col>
            <Col md={4}>Email ID and Contact Number</Col>
            <Col md={4}>Company Location Details</Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} className="text-center">
              Copyright © All Rights Reserved
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
