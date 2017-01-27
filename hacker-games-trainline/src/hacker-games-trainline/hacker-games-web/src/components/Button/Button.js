import React, { Component } from 'react';
import { colors } from '../../styles/colors';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  largeBtn: {
    color: colors.white,
    width: '320px',
    height: '90px',
    borderRadius: '8px',
    fontSize: '24px',
    border: 0,
    margin: '12px auto',
    display: 'block',
    cursor: 'pointer'
  },
  topaz: {
    backgroundColor: colors.topaz
  },
  darkSkyBlue: {
    backgroundColor: colors.darkSkyBlue
  },
  squash: {
    backgroundColor: colors.squash
  },
  red: {
    backgroundColor: colors.red
  }
});

class Button extends Component {
  render() {
    return (
      <button className={css(styles.largeBtn, styles[this.props.styleSheet])} >
        { this.props.label }
      </button>
    );
  }
}

export default Button;