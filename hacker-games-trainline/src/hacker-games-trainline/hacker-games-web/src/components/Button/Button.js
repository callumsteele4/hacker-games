import React, { Component } from 'react';
import { css } from 'aphrodite';
import { styles } from '../../styles/main';

class Button extends Component {
  render() {
    return (
      <button className={css(styles.largeBtn, styles[this.props.style])} >
        { this.props.label }
      </button>
    );
  }
}

export default Button;