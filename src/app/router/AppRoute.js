import React, { Suspense, memo } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/spinner';

export const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Suspense fallback={(
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      >
        <Component {...props} />
      </Suspense>
    )}
  />
);

/* eslint-disable react/forbid-prop-types */
AppRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default memo(AppRoute);
