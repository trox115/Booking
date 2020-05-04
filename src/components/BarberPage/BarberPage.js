import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Calendar from './Calendar';
import * as bookingActions from '../../actions/Actions';

const color = ({ currentColor }) => currentColor;
const barberphto = ({ currentphoto }) => currentphoto;
const Overlay = styled.div`
  min-width: 100%;
  height: 100vh;
  background-color: ${color};
  opacity: 0.7;
  margin-left: -10px;
  z-index: 2;
`;

const BarberPic = styled.div`
  background-image: url(${barberphto});
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

function BarberPage({ Bookings, ...props }) {
  const [bk, setBooking] = useState([]);
  const { user } = props;
  const userId = user[0].user.id;

  console.log(userId);
  const [barber, setBarber] = useState({ ...props.barbers });

  let i = 0;
  useEffect(async () => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/bookings');
      const data = await response.json();
      console.log(data);
      setBooking(await data);
    }

    fetchData();
  }, [i]);
  const photo = `/${barber.phto}.png`;
  return (
    <Col md="10 p-0" className="barber">
      <BarberPic currentphoto={photo}>
        <Overlay currentColor={barber.color}>
          <Container className="fill">
            <Row className="align-items-center h-100">
              <Col md="12">
                <Title>
                  <h3>Book this barber now</h3>
                  <p>{barber.description}.</p>
                </Title>
                <Calendar dateTime={bk} barberId={barber.id} userId={userId} />
              </Col>
            </Row>
          </Container>
        </Overlay>
      </BarberPic>
    </Col>
  );
}

function getBookBySlug(barbers, slug) {
  return barbers.find(barber => barber.id === parseInt(slug));
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  return {
    user: state.user,
    barber: state.barber,
    bookings: state.booking,
    barbers: getBookBySlug(state.barber, slug),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Bookings: () => dispatch(bookingActions.Bookings()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BarberPage);
