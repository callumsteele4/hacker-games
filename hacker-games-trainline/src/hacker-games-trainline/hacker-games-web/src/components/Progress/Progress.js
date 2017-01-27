import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    position: 'relative'
  },
  progress: {
    height: 20,
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#1abc9c'
  }
});

class Progress extends React.Component {
  static defaultProps = {
    max: 10,
    current: 0
  }

  render() {
    const { current, max } = this.props;
    const position = (current * 100) / max;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.progress)} style={{ width: `${position}%` }}></div>
      </div>
    );
  }
}

export default Progress;
