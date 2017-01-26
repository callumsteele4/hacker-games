import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FamilyDetailField from './FamilyDetailField';

class FamilyDetail extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    const birthday =  user.birthday ? moment().format('Do MMMM YYYY', user.birthday) : null;

    return(
      <div>
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

