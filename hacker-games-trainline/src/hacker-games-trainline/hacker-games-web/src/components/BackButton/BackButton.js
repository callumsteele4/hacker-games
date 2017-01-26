import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    color: 'white',
    padding: '4px 10px',
  }
});

const BackButton = ({ onClick }) => {
  return (
    <div className={css(styles.container)} onClick={onClick}>Back</div>
  )
};

export default BackButton;
