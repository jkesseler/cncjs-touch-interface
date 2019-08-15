import React, { Suspense, memo } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={(props) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Layout {...rest}>
        <Suspense fallback={(
          <div style={{ marginTop: 16 }}>
            <LinearProgress color="secondary" variant="query" />
          </div>
          )}
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...props} />
        </Suspense>
      </Layout>
    )}
  />
);

//
// const componentPropType = PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.func,
//   PropTypes.element,
// ]);
//

/* eslint-disable react/forbid-prop-types */
AppRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
};

export default memo(AppRoute);
