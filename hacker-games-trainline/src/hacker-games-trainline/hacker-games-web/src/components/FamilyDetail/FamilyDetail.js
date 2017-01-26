import React from 'react';
import { connect } from 'react-redux';

class FamilyDetail extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return(
      <div>{user.name}</div>
    )
  }
};

const userId = (state, props) => ({
  user: state.users[props.params.id]
});

export default connect(userId, null)(FamilyDetail);

