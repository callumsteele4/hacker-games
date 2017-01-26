import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BackButton from '../BackButton/BackButton';
import { getRelations } from '../../actions/usersActions';

class FamilyWrapper extends React.Component {
  componentWillMount() {
    const { getRelations } = this.props;
    getRelations();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header
          section="family"
          leftItem={(<BackButton onClick={() => null}/>)}/>
        { children }
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  getRelations: () => { getRelations()(dispatch) }
}))(FamilyWrapper);
