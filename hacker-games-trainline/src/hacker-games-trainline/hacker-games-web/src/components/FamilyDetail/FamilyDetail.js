import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import moment from 'moment';
import sample from '../../images/sample-500x500.png';
import FamilyDetailField from './FamilyDetailField';

const styles = StyleSheet.create({
  avatarContainer: {
    height: 300,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%'
  }
});
  
class FamilyDetail extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    const birthday =  user.birthday ? moment().format('Do MMMM YYYY', user.birthday) : null;

    return(
      <div>
        <div className={css(styles.avatarContainer)}>
          <img className={css(styles.avatar)} src={sample} alt={user.name}/>
        </div>
        <FamilyDetailField title="Name" info={user.name} />
        <FamilyDetailField 
          title="Relationship" 
          info={'Your ' + user.relation.toLowerCase()} 
        />
        <FamilyDetailField title="Birthday" info={birthday} />
        <FamilyDetailField title="City" info={user.city} />
      </div>
    )
  }
};

const userId = (state, props) => ({
  user: state.users[props.params.id]
});

export default connect(userId, null)(FamilyDetail);

