import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../actions/Actions';

function ProtectedRoute({
  loggedInStatus,
  checkLogin,
  component: Component,
  ...rest
}) {
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={props => {
        if (loggedInStatus[0]) {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    loggedInStatus: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkLogin: () => dispatch(api.isAuthenticated()),
  };
}

ProtectedRoute.propTypes = {
  loggedInStatus: PropTypes.instanceOf(Array).isRequired,
  checkLogin: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  component: PropTypes.shape({
    WrappedComponent: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
