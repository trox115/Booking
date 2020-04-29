import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faVimeoV,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Brand = styled.h1`
  font-family: 'Pacifico', cursive;
  transform: rotate(-10deg);
  text-decoration: underline;
  font-size: 30px;
  text-align: center;
  color: black;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const SingleLink = styled.a`
  margin-left: 10px;
  font-family: 'Lato', black;
  font-weight: 600;
  text-align: left;
  color: black;
  cursor: pointer;
`;

const Social = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: black;
  margin-bottom: 30px;
  text-align: center;
  margin-left: 10px;
  svg {
    margin-left: 10px;
  }
`;
const CopyWright = styled.div`
  p {
    font-size: 11px;
  }
`;
function NavBar() {
  return (
    <Col md="2" sm="2">
      <Nav className="nav flex-column nav-pills nav-fill">
        <SingleLink className="navbar-brand" href="/">
          <Brand>Barber</Brand>
        </SingleLink>
        <NavLink to="/" className="nav-link" activeClassName="active" exact>
          Barbers
        </NavLink>
        <NavLink
          to="/lifestyle"
          className="nav-link"
          activeClassName="active"
          exact
        >
          LifeStyle
        </NavLink>
        <NavLink to="/book" className="nav-link" activeClassName="active" exact>
          Book
        </NavLink>
        <NavLink
          to="/bookings"
          className="nav-link"
          activeClassName="active"
          exact
        >
          Your Bookkings
        </NavLink>
        <Social>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faGooglePlusG} />
          <FontAwesomeIcon icon={faVimeoV} />
          <FontAwesomeIcon icon={faPinterestP} />
          <CopyWright>
            <p>&copy; 2020 Barber</p>
          </CopyWright>
        </Social>
      </Nav>
    </Col>
  );
}

export default NavBar;
