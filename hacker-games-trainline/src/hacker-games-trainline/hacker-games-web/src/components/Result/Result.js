import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Button from '../Button/Button';

class Result extends React.Component {
  render() {
    return (
      <div>
        <Link to="/quiz">
          <Button label="Train again" styleSheet="topaz"/>
        </Link>
        <Link to="/">
          <Button label="Quit" styleSheet="red"/>
        </Link>
      </div>
    );
  }
}

export default Result;
