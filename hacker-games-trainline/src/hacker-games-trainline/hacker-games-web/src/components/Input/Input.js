import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    fontSize: 14
  }
});

const Input = ({ onChange, value }) => (
  <input className={css(styles.input)} type="text" onChange={onChange} value={value} placeholder="Enter a name"/>
);

export default Input;
