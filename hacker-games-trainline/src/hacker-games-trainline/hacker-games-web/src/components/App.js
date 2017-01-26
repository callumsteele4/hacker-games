import React, { Component } from 'react';
import { css } from 'aphrodite';
import './App.css';
import { styles } from '../styles/main';

class App extends Component {
  render() {
    return (
      <div className={css(styles.root)}>
          Hello world
      </div>
    );
  }
}

export default App;
