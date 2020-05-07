import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from '../../containers/Calendar';
import { BarberPic, Overlay, TitleBarber } from '../../styles';
import * as bookingActions from '../../actions/Actions';

function BarberPage({ history, Bookings, ...props }) {
  const [bk, setBooking] = useState([]);
  const { user } = props;
  const userId = user[0].user.id;
  const { barbers } = props;
  // eslint-disable-next-line no-unused-vars
  const [barber, setBarber] = useState({ ...barbers });
  async function fetchData() {
    const response = await fetch('https://antoniobarberapi.herokuapp.com/bookings');
    const data = await response.json();
    setBooking(await data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const photo = `/${barber.photo_link}.png`;
  return (
    <Col md="10 p-0" className="barber">
      <BarberPic currentphoto={photo}>
        <Overlay currentColor={barber.color}>
          <Container className="fill">
            <Row className="align-items-center h-100">
              <Col md="12">
                <TitleBarber>
                  <h3>Book this barber now</h3>
                  <p>{barber.description}</p>
                </TitleBarber>
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
