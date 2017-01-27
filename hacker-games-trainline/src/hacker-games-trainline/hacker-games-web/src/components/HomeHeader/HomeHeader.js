import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Logo } from '../Logo';
import SmallButton from '../SmallButton/SmallButton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 10px'
  }
});

const HomeHeader = () => (
  <div className={css(styles.container)}>
    <Logo/>
    <SmallButton color="#1abc9c">
      Log out
    </SmallButton>
  </div>
);

export default HomeHeader;
