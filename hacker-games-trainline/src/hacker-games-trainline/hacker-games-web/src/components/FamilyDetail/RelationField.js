import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import { styles as familyStyles } from './FamilyDetailStyles';
import sample from '../../images/sample.png';

const styles = StyleSheet.create({
  relationRow: {
    padding: '10px 20px',
    borderBottom: 0,
    display: 'block',
  },
  relationContainer: {
    width: '100px',
    textAlign: 'center',
    padding: '17px 10px'
  },
  relationItemsContainer: {
    display: 'flex',
  },
  thumbnailContainer: {

  },
  thumbnail: {
    borderRadius: '50%',
    width: '75px',
    height: '75px'
  },
  name: {
    color: '#6d6d6d'
  }
});

class RelationField extends React.Component {
  render() {
    const { title, connections, relations } = this.props;
    console.log('PROPS...', this.props);
    console.log('RELATIONS...', this.props.relations);
    if(!relations) {
      return null;
    }

    const relationItems = relations.map((rel) => (
      <div className={css(styles.relationContainer)}>
        <div className={css(styles.thumbnailContainer)}>
          <img className={css(styles.thumbnail)} src={sample} alt={rel.name}/>
        </div>
        <div className={css(styles.name)}>
          {rel.name}
        </div>
      </div>
    ));
    return(
      <div className={css(styles.relationRow)}>
        <div className={css(familyStyles.title)}>
          {title}
        </div>
        <div className={css(styles.relationItemsContainer)}>
          {relationItems}
        </div>
      </div>
    )
  }
};

const relationId = (state, props) => {
  return ({
    relations: props.connections.map((con) => {
      if (con === 0 ) {
        return state.session.user
      }
      return state.users[con]
    }),
  });
}

export default connect(relationId, null)(RelationField);
