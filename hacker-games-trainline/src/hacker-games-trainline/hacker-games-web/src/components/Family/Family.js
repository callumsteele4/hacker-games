import React from 'react';
import { connect } from 'react-redux';
import RelationCard from '../RelationCard/RelationCard';
import { Link } from 'react-router';

class Family extends React.Component {
  render() {
    const { relations } = this.props;
    const relationsKeys = Object.keys(relations);

    return (
      <div>
        {
          relationsKeys.length > 0 && relationsKeys.map(key => (
            <Link to={`family/detail/${key}`} key={key}>
              <RelationCard relation={relations[key]}/>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default connect((state, props) => ({
  relations: state.users
}), null)(Family);
