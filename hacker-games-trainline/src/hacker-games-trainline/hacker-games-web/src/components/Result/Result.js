import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Button from '../Button/Button';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'TL-Circular',
    color: '#b0b0b0',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 100
  }
});

class Result extends React.Component {
  render() {
    return (
      <div>
        <h1 className={css(styles.title)}>
          Training completed, have a great day !
        </h1>
        <div>
          <Link to="/quiz">
            <Button label="Train again" styleSheet="topaz"/>
          </Link>
          <Link to="/">
            <Button label="Home" styleSheet="red"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Result;
