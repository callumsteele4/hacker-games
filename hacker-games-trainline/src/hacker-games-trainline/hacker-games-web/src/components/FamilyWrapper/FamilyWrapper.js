import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../../actions/sessionActions';
import Header from '../Header/Header';
import BackButton from '../BackButton/BackButton';

class FamilyWrapper extends React.Component {
  componentWillMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header
          section="family"
          leftItem={(<BackButton/>)}/>
        { children }
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  getUser: () => { getUser()(dispatch) }
}))(FamilyWrapper);
