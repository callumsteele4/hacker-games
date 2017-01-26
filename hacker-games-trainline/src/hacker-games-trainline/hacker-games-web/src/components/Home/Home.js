import React, { Component } from 'react';
import { css } from 'aphrodite';
import HomeHeader from '../HomeHeader/HomeHeader';
import './Home.css';
import { styles } from '../../styles/main';

class App extends Component {
  render() {
    return (
      <div className={css(styles.root)}>
        <HomeHeader/>
      </div>
    );
  }
}

export default App;
