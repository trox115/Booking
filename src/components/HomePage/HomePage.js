import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Slider from './Slider';

const Title = styled.div`
  font-family: 'Lato', black;
  text-align: center;

  h3 {
    font-weight: 900;
  }
  p {
    color: gray;
  }
`;

function HomePage() {
  return (
    <Col md="10" sm="10">
      <Container className="fill">
        <Row className="align-items-center h-100">
          <Col md="12">
            <Title>
              <h3>Choose your Barber</h3>
              <p>Choose one to book with him.</p>
            </Title>
            <Slider />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default HomePage;
