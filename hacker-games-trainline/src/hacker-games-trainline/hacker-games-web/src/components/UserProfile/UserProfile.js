import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../styles/colors';
import logoImage from './user.png';
import moment from 'moment';

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
  },
  dob: {
    fontSize: 13,
    color: '#b3b2b2'
  }
});

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return (
      <div className={css(userProfileStyle.root)}>
        <div className={css(userProfileStyle.imageWrapper)}>
          <img
            src={user.picturePath}
            alt="user"
            className={css(userProfileStyle.userImage)}
          />
        </div>
        <div>
          { user.name }
        </div>
        <div className={css(userProfileStyle.dob)}>
          { moment(user.birthday).format('Do MMMM YYYY') }
        </div>
      </div>
    );
  }
}

export default UserProfile;