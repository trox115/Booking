import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import * as barberActions from '../../actions/Actions';
import {Title, Service} from '../../styles'


function HomePage({ ...props }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { barber } = props;
  const { loadBarbers } = props;
  useEffect(() => {
    if (barber.length <= 0) {
      loadBarbers();
    }
  }, [barber, loadBarbers]);

  let allbarber = [];
  allbarber = barber.map(barbers => (
    <Service key={barbers.id} currentColor={barbers.color}>
      <Link to={`/barber/${barbers.id}`}>
        <div className="image-place">
          <img src={`./${barbers.photo_link}.png`} alt={barbers.name} />
        </div>
        <div className="barber-name">
          <p>{barbers.name}</p>
        </div>
        <div className="details">
          <p>{barbers.short_description}</p>
        </div>
      </Link>
      <div className="social">
        <a href={barbers.twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={barbers.facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={barbers.instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </Service>
  ));
  return (
    <Col md="10" sm="10">
      <Container className="fill">
        <Row className="align-items-center h-100">
          <Col md="12">
            <Title>
              <h3>Choose your Barber</h3>
              <p>Choose one to book with him.</p>
            </Title>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>{allbarber}</Slider>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    loadBarbers: () => dispatch(barberActions.Barbers()),
  };
}

function mapStateToProps(state) {
  return {
    user: state.user,
    barber: state.barber,
  };
}

HomePage.propTypes = {
  loadBarbers: PropTypes.func.isRequired,
  barber: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
