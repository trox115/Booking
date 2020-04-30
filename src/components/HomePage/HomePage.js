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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import * as barberActions from '../../actions/Actions';

const color = ({ currentColor }) => currentColor;

const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  font-family: 'Lato', black;
  .image-place {
    align-items: center;
    background-color: ${color};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    img {
      height: 100%;
    }
  }
  .barber-name {
    text-align: center;
    p {
      color: black;
      border-bottom: 1px dotted gray;
      width: 50%;
      margin: 0 auto;
      font-weight: 700;
    }
  }
  svg {
    margin-left: 5px;
    cursor: pointer;
  }

  .details {
    color: gray;
    font-weight: 500;
  }

  .social {
    color: gray;
  }
`;
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

function HomePage({ ...props }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { barber } = props;
  useEffect(() => {
    const { loadBarbers } = props;
    loadBarbers();
  }, [1]);

  let allbarber = [];
  allbarber = barber.map(barbers => (
    <Service key={barbers.id} currentColor={barbers.color}>
      <div className="image-place">
        <img src={`./${barbers.phto}.png`} alt={barbers.name} />
      </div>
      <div className="barber-name">
        <p>{barbers.name}</p>
      </div>
      <div className="details">
        <p>{barbers.shortD}</p>
      </div>
      <div className="social">
        <a href={barbers.tw}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={barbers.fb}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={barbers.ins}>
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