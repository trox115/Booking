import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Calendar from '../../containers/Calendar';
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

  form {
    text-align: center;
  }
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

function BarberPage({ history, Bookings, ...props }) {
  const [bk, setBooking] = useState([]);
  const { user } = props;
  const userId = user[0].user.id;
  const { barbers } = props;
  // eslint-disable-next-line no-unused-vars
  const [barber, setBarber] = useState({ ...barbers });
  async function fetchData() {
    const response = await fetch('http://localhost:3001/bookings');
    const data = await response.json();
    setBooking(await data);
  }
  useEffect(() => {
    fetchData();
  }, []);
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
                  <p>{barber.description}</p>
                </Title>
                <Calendar
                  dateTime={bk}
                  barberId={barber.id}
                  userId={userId}
                  history={history}
                />
              </Col>
            </Row>
          </Container>
        </Overlay>
      </BarberPic>
    </Col>
  );
}

function getBarberBySlug(barbers, slug) {
  return barbers.find(barber => barber.id === parseInt(slug, 10));
}

function mapStateToProps(state, ownProps) {
  const { slug } = ownProps.match.params;
  return {
    user: state.user,
    barber: state.barber,
    bookings: state.booking,
    barbers: getBarberBySlug(state.barber, slug),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Bookings: () => dispatch(bookingActions.Bookings()),
  };
}
BarberPage.propTypes = {
  Bookings: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Array).isRequired,
  barbers: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BarberPage);
