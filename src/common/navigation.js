import React from 'react';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faVimeoV,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import * as logout from '../actions/Actions';
import {Brand, SingleLink,Button,Social,CopyWright} from '../styles'

function NavBar({ logout }) {
  function handleClick() {
    logout();
  }

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
        <NavLink
          to="/bookings"
          className="nav-link"
          activeClassName="active"
          exact
        >
          Your Bookkings
        </NavLink>
        <Button type="button" onClick={handleClick} className="nav-link rem">
          Logout
        </Button>
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
function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout.logout()),
  };
}
NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NavBar);
