import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  root: {
    width: 375,
    minHeight: '100vh',
    margin: '0px auto'
  }
});

fetch('http://hacker-games-trainline20170126053304.azurewebsites.net/api/user').then(res => {
  console.log(res);
});

const Root = ({ children }) => (
  <div className={css(styles.root)}>
    { children }
  </div>
);

export default Root;
