import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const MainBody = () => {
  const [order, setOrder] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    productName: "",
    totalQuantity: 10,
    productQuantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
    // Here you would typically handle the backend part, like sending an email with nodemailer
  };

  /*  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })
    .then(response => response.json())
    .then(data => alert('Email sent successfully!'))
    .catch(error => alert('Error sending email: ' + error));
  }
 */

  return (
    <Container fluid>
      <Card className="shadow">
        <Card.Body>
          <Row>
            <Col md={3}>
              <h4>Company Brief Description</h4>
              <p>
                Sample text here... Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Animi, quasi. Officia sed velit ut omnis
                cupiditate hic alias inventore nam recusandae modi, quaerat non
                odio dolorem voluptatem, debitis nobis obcaecati.
              </p>
              <p>
                Sample text here... Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Animi, quasi. Officia sed velit ut omnis
                cupiditate hic alias inventore nam recusandae modi, quaerat non
                odio dolorem voluptatem, debitis nobis obcaecati.
              </p>
              <p>
                Sample text here... Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Animi, quasi. Officia sed velit ut omnis
                cupiditate hic alias inventore nam recusandae modi, quaerat non
                odio dolorem voluptatem, debitis nobis obcaecati.
              </p>
            </Col>
            <Col md={9}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-1">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactNumber"
                    placeholder="Enter contact number"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Row>
                  <Col md={3}>
                    <Form.Group
                      controlId="formBasicEmail"
                      className="mb-1"
                      md={3}
                    >
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        as="select"
                        name="productName"
                        onChange={handleChange}
                      >
                        <option>Ferrous</option>
                        <option>Non-Ferrous</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicEmail"
                      className="mb-1"
                      md={3}
                    >
                      <Form.Label>Total Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        name="totalQuantity"
                        placeholder="Enter total quantity"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formBasicEmail"
                      className="mb-1"
                      md={3}
                    >
                      <Form.Label>Product Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        name="productQuantity"
                        placeholder="Enter product quantity"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>{" "}
                </Row>
                <Button variant="primary" type="submit" className="mt-5 ">
                  Confirm Your Order and Book
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MainBody;
