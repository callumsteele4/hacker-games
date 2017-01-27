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
  },
  disabled: {
    opacity: 0.6
  }
});

class SmallButton extends Component {

  static defaultProps = {
    color: '#3498db'
  };

  render() {
    const { color, children, onClick, disable } = this.props;

    return (
      <button
        className={css(styles.container, disable && styles.disabled)}
        style={{ backgroundColor: color }}
        onClick={onClick}
        disabled={disable}>
        { children }
      </button>
    );
  }
}

export default SmallButton;
