import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import moment from 'moment';
import { colors } from '../../styles/colors';
import sample from '../../images/sample-500x500.png';
import FamilyDetailField from './FamilyDetailField';
import RelationField from './RelationField';
import { styles as familyStyles } from './FamilyDetailStyles';

const styles = StyleSheet.create({
  avatarContainer: {
    height: 300,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%'
  },
  title: {
    color: colors.greyish,
    fontWeight: 'bold',
    fontSize: '20px'
  },
  noteRow: {
    padding: '10px 20px',
    borderBottom: 0,
    display: 'block'
  },
  noteField: {
    height: '118px',
    borderRadius: '8px',
    backgroundColor: '#f5f4f4',
    border: 'solid 1px #d4d4d4',
    flexDirection: 'column',
    margin: '15px 0',
    padding: '14px',
    color: colors.brownishGrey,
    fontSize: '14px'
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
        <div className={css(styles.noteRow)}>
          <div className={css(familyStyles.title)}>
            Notes
          </div>
          <div className={css(styles.noteField)}>
            {user.note}
          </div>
        </div>
        { 
          [user.partnerId] && 
          <RelationField title="Partner" connections={[user.partnerId]}/>
        }
        { 
          user.childrenIds && 
          <RelationField title="Children" connections={user.childrenIds}/>
        }
 
      </div>
    )
  }
};

const userId = (state, props) => ({
  user: state.users[props.params.id],
  // partner: state.users[props.params.id] ? state.users[state.users[props.params.id].partnerId] : null,
  // children: state.users[props.params.id] ? state.users[state.users[props.params.id].childrenIds] : null,
});

export default connect(userId, null)(FamilyDetail);

