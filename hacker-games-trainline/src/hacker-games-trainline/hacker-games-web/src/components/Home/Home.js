import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import HomeHeader from '../HomeHeader/HomeHeader';
import { styles } from '../../styles/main';
import Button from '../Button/Button';
import UserProfile from '../UserProfile/UserProfile';

class Home extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className={css(styles.root)}>
        <HomeHeader/>
        <UserProfile user={user}/>
        <Link to="/quiz">
          <Button label="Quiz" styleSheet="topaz"/>
        </Link>
        <Link to="/family">
          <Button label="Family" styleSheet="darkSkyBlue"/>
        </Link>
        <Button label="Add" styleSheet="squash"/>
      </div>
    );
  }
}

export default connect((state, props) => ({
  user: state.session.user
}), null)(Home);
