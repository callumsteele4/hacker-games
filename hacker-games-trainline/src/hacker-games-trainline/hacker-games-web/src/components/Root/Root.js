import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  root: {
    width: 375,
    minHeight: '100vh',
    margin: '0px auto'
  }
});

const Root = ({ children }) => (
  <div className={css(styles.root)}>
    { children }
  </div>
);

export default Root;
