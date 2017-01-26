import React, { Component } from 'react';
import { css } from 'aphrodite';
import { styles } from '../../styles/main';
import Button from '../Button/Button';

class Home extends Component {
  render() {
    return (
      <div className={css(styles.root)}>
        <Button label="Quiz" style="topaz"/>
        <Button label="Family" style="darkSkyBlue"/>
        <Button label="Add" style="squash"/>
      </div>
    );
  }
}

export default Home;
