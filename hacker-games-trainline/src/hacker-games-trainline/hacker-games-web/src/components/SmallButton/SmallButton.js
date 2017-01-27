import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    color: 'white',
    width: 120,
    height: 45,
    borderRadius: 8,
    border: 0,
    cursor: 'pointer',
    fontSize: 16
  }
});

class SmallButton extends Component {

  static defaultProps = {
    color: '#3498db'
  };

  render() {
    const { color, children, onClick } = this.props;

    return (
      <button className={css(styles.container)} style={{ backgroundColor: color }} onClick={onClick}>
        { children }
      </button>
    );
  }
}

export default SmallButton;
