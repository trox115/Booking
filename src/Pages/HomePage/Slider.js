import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function random() {
  return Math.floor(Math.random() * 5);
}
const array = ['blue', 'red', 'green', 'orange', 'black'];

const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  font-family: 'Lato', black;
  .image-place {
    align-items: center;
    background-color: ${array[random()]};
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

function slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      <Service>
        <div className="image-place">
          <img src="./barber1.png" alt="1" />
        </div>
        <div className="barber-name">
          <p>John Doe</p>
        </div>
        <div className="details">
          <p> This is a barber with 5 yers experience</p>
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Service>
      <Service>
        <div className="image-place">
          <img src="./babrer2.png" alt="1" />
        </div>
        <div className="barber-name">
          <p>John Doe</p>
        </div>
        <div className="details">
          <p> This is a barber with 5 yers experience</p>
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Service>
      <Service>
        <div className="image-place">
          <img src="./Barber3.png" alt="1" />
        </div>
        <div className="barber-name">
          <p>John Doe</p>
        </div>
        <div className="details">
          <p> This is a barber with 5 yers experience</p>
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Service>
      <Service>
        <div className="image-place">
          <img src="./Barber4.png" alt="1" />
        </div>
        <div className="barber-name">
          <p>John Doe</p>
        </div>
        <div className="details">
          <p> This is a barber with 5 yers experience</p>
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Service>
    </Slider>
  );
}

export default slider;
