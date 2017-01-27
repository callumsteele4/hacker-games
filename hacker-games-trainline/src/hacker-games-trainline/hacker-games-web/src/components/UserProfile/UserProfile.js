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
    maxWidth: '100%'
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    overflow: 'hidden',
    margin: 'auto',
    marginBottom: 20
  }
});

class UserProfile extends Component {
  render() {
    const { user } = this.props;
  
    return (
      <div className={css(userProfileStyle.root)}>
        <div className={css(userProfileStyle.imageWrapper)}>
          <img
            src={user && user.picturePath}
            alt="user"
            className={css(userProfileStyle.userImage)}
          />
        </div>
        { user && user.name }
      </div>
    );
  }
}

export default UserProfile;