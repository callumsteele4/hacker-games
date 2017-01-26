import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../styles/colors';
import logoImage from './user.png';

const userProfileStyle = StyleSheet.create({
  root: {
    textAlign: 'center',
    color: colors.brownishGrey,
    fontSize: '20px',
    margin: '25px 0 44px 0'
  },
  userImage: {
    display: 'block',
    margin: '17px auto'
  }
});

class UserProfile extends Component {
  render() {
    return (
      <div className={css(userProfileStyle.root)}>
        <img 
          src={logoImage}
          alt="user"
          className={css(userProfileStyle.userImage)}
        />
        Tom Price
      </div>
    );
  }
}

export default UserProfile;