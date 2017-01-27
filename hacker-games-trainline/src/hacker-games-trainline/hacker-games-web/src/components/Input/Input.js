import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 52,
    fontSize: 14,
    borderRadius: 8,
    border: 'solid 1px #b6b3b3',
    backgroundColor: '#f9f9f9',
    marginBottom: 25,
    padding: '0px 20px',
    boxSizing: 'border-box'
  },
  correct: {
    border: 'solid 1px #1abc9c',
    color: '#1abc9c'
  },
  isWrong: {
    border: 'solid 1px #e74c3c',
    color: '#e74c3c'
  }
});

const Input = ({ onChange, value, isCorrect, isWrong }) => (
  <input
    className={css(styles.input, isCorrect && styles.correct, isWrong && styles.isWrong)}
    type="text"
    onChange={onChange}
    value={value}
    placeholder="Enter a name"/>
);

export default Input;
