import React, { Component } from 'react';
import { css } from 'aphrodite';
import HomeHeader from '../HomeHeader/HomeHeader';
import { styles } from '../../styles/main';
import Button from '../Button/Button';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className={css(styles.root)}>
        <HomeHeader/>
        <Button label="Quiz" style="topaz"/>
        <Link to="/family">
          <Button label="Family" style="darkSkyBlue"/>
        </Link>
        <Button label="Add" style="squash"/>
      </div>
    );
  }
}

export default Home;
