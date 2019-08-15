import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Footer from '~ui/footer';
import routes from '../../routes';

import styles from './Default.module.css';

export const Default = ({ children, title, displayFooter }) => (
  <div className={styles.main}>
    <Paper
      elevation={0}
      className={styles.content}
    >

      {/* Main content goes here */}
      { children }

      {/*
        Elements displayed on every page go here
        E-Stop button
        (soft) Reset button
        Unlock button
        Cancel Alarm button
      */}
    </Paper>

    {displayFooter && (
      <Footer menuItems={routes}>{title}</Footer>
    )}
  </div>
);

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  displayFooter: PropTypes.bool,
};

Default.defaultProps = {
  displayFooter: true,
};

export default memo(Default);
