import React, { Component } from 'react';
import { css } from 'aphrodite';
import HomeHeader from '../HomeHeader/HomeHeader';
import { styles } from '../../styles/main';
import Button from '../Button/Button';
import UserProfile from '../UserProfile/UserProfile';

class Home extends Component {
  render() {
    return (
      <div className={css(styles.root)}>
        <HomeHeader/>
        <UserProfile/>
        <Button label="Quiz" styleSheet="topaz"/>
        <Button label="Family" styleSheet="darkSkyBlue"/>
        <Button label="Add" styleSheet="squash"/>
      </div>
    );
  }
}

export default Home;
