import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Calendar from './Calendar';

const Overlay = styled.div`
  min-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  margin-left: -10px;
  z-index: 2;
`;

const BarberPic = styled.div`
  background: url('/barber1.png');
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  z-index: 1;
  background-position: left bottom;
`;
const Title = styled.div`
  font-family: 'Lato', black;
  text-align: center;
  color: white;
  margin: 0 25%;
  justify-content: center;
  align-content: center;
  align-items: center;
  h3 {
    font-weight: 900;
    border-bottom: 1px solid white;
    width: 300px;
  }
  p {
    color: gray;
    width: 300px;
  }

  button {
    background-color: white;
    color: black;
    border-radius: 50% 50% 50% 50%;
    height: 50px;
    width: 120px;
  }
`;

function BarberPage() {
  return (
    <Col md="10 p-0" className="barber">
      <BarberPic>
        <Overlay>
          <Container className="fill">
            <Row className="align-items-center h-100">
              <Col md="12">
                <Title>
                  <h3>Book this barber now</h3>
                  <p>
                    This barber has 10 years experience, formed in USA is very
                    good to cut hair.
                  </p>
                  <button type="button">Book now</button>
                </Title>
                <Calendar />
              </Col>
            </Row>
          </Container>
        </Overlay>
      </BarberPic>
    </Col>
  );
}

export default BarberPage;
