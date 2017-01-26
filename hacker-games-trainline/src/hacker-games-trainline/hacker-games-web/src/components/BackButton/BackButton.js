import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Arrow from '../../icons/arrow';

const styles = StyleSheet.create({
  container: {
    color: 'white',
    padding: '4px 10px',
    cursor: 'pointer',
    display: 'flex'
  }
});

const BackButton = ({ onClick }) => {
  return (
    <div className={css(styles.container)} onClick={onClick}>
      <Arrow/>
      <div>Back</div>
    </div>
  )
};

export default BackButton;
