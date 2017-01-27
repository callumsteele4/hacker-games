import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const logoStyle = StyleSheet.create({
  main: {
    fontFamily: 'TL-Circular',
    fontSize: 36,
    color: '#b0b0b0',
    margin: '10px 0px'
  }
});

export const Logo = () => (
  <h1 className={css(logoStyle.main)}>Familymem</h1>
);
